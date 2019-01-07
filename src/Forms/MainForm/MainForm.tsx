import React from 'react';
import { Select, Slider, TextField } from '../../components';
import Button from '@material-ui/core/Button';
import { MainFormContainer, ElementsWrapper, ButtonContainer, SliderContaier } from './style';

interface MainFormProps {
    searchFieldPlaceholder: string;
    searchFieldLabel: string;
    selectLabel: string;
    selectMenuItems: JSX.Element[];
    sliderMaxValue: number;
    sliderMinValue: number;
    sliderStep: number;
}

const MainForm = ({
    searchFieldLabel,
    searchFieldPlaceholder,
    selectMenuItems,
    sliderMaxValue,
    sliderMinValue,
    sliderStep,
    selectLabel,
}: MainFormProps) => {
    const searchFieldProps = {
        placeholder: searchFieldPlaceholder,
        label: searchFieldLabel,
    };

    const selectProps = {
        items: selectMenuItems,
        label: selectLabel,
    };

    const sliderProps = {
        max: sliderMaxValue,
        min: sliderMinValue,
        step: sliderStep,
    };

    return (
        <MainFormContainer>
            <ElementsWrapper>
                <TextField {...searchFieldProps} />
                <Select {...selectProps}/>
                <SliderContaier>
                    <Slider {...sliderProps} label="Price" />
                    <Slider {...sliderProps} label="Strong" />
                </SliderContaier>    
            </ElementsWrapper>
            <ButtonContainer>
                <Button fullWidth={true} variant="contained" color="primary">Search</Button>
            </ButtonContainer>
        </MainFormContainer>
    );
};

export default MainForm;