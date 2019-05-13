import React, { useCallback } from 'react';
import { ApolloClient } from 'apollo-boost';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Field, FormikProps } from 'formik';
import { memoizeWith, identity } from 'ramda';

import {
    SliderField,
    SelectField,
    SmallButton,
    ToogleButtonGroupField,
} from '../../components/ui';
import { BeerTypeSelect } from '../../components';
import { beerTypes, BeerForm, BeerFormValues } from '../../@types';
import { FormixInputField } from '../../components/formix';

import {
    MainFormContainer,
    ElementsWrapper,
    SliderContaier,
    ButtonWrapper,
    MainFormToogleButtonGroupFieldWrapper,
    MainFormContainerProps,
} from './style';

export interface MainFormProps
    extends RouteComponentProps,
        MainFormContainerProps,
        BeerForm {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
    client: ApolloClient<any>;
    beerTypesData: beerTypes;
}

const onSubmit = memoizeWith(
    identity,
    (history: RouteComponentProps['history'], client: ApolloClient<any>) => ({
        beerName = '',
        beerType,
        filter,
        priceRange,
        strongRange,
    }: BeerFormValues) => {
        console.log(filter);
        client.writeData({
            data: {
                beerForm: {
                    __typename: 'beerForm',
                    beerName,
                    beerType,
                    filter,
                    priceRange,
                    strongRange,
                },
            },
        });
        history.push('/form/beers');
    }
);

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
    history,
    variant,
    data,
    client,
    beerTypesData,
}: MainFormProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
        label: searchFieldLabel,
    };

    const selectProps = {
        label: selectLabel,
        beerTypes: beerTypesData.beerTypes || [],
    };

    const sliderProps = {
        max: sliderMaxValue,
        min: sliderMinValue,
        step: sliderStep,
    };

    const filterProps = {
        values: ['Price', 'Distance', 'Rating'],
        label: 'Filter by',
    };

    const searchButtonProps = {
        type: 'submit',
        fullWidth: true,
        variant: 'contained',
        color: 'secondary',
    };

    const generateForm = useCallback(
        ({ handleSubmit }: FormikProps<BeerFormValues>) => (
            <form onSubmit={handleSubmit}>
                <MainFormContainer variant={variant}>
                    <ElementsWrapper>
                        <Field
                            name="beerName"
                            type="text"
                            {...searchFieldProps}
                            component={FormixInputField}
                        />
                        <BeerTypeSelect
                            name="beerType"
                            isReactFinalForm={false}
                            {...selectProps}
                        />
                        <SliderContaier>
                            <Field
                                component={SliderField}
                                name="priceRange"
                                label="Price"
                                {...sliderProps}
                            />
                            <Field
                                component={SliderField}
                                name="strongRange"
                                {...sliderProps}
                                label="Strong"
                            />
                        </SliderContaier>
                    </ElementsWrapper>
                    {variant !== 'small' ? (
                        <MainFormToogleButtonGroupFieldWrapper>
                            <Field
                                component={ToogleButtonGroupField}
                                name="filter"
                                {...filterProps}
                            />
                        </MainFormToogleButtonGroupFieldWrapper>
                    ) : (
                        <SelectField
                            name="filter"
                            {...filterProps}
                        />
                    )}
                    <ButtonWrapper>
                        <SmallButton {...searchButtonProps}>Search</SmallButton>
                    </ButtonWrapper>
                </MainFormContainer>
            </form>
        ),
        [
            variant,
            searchFieldProps,
            filterProps,
            searchButtonProps,
            selectProps,
            sliderProps,
        ]
    );

    return (
        data.beerForm ? (
            <Formik
                onSubmit={onSubmit(history, client)}
                initialValues={data.beerForm}
                render={generateForm}
            />
        )
        : null
    );
};

export default MainForm;
