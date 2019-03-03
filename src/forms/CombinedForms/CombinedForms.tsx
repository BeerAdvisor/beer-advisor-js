import React from 'react';

import { MainForm, MainFormProps } from '../MainForm';
import { Tabs } from '../../components';

export type CombinedForms = MainFormProps;

export const CombinedForms = (props: CombinedForms) => {
    const { variant } = props;
    const layoutProps = {
        ...props,
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Beer name',
        selectLabel: 'Beer type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
        <Tabs variant={variant}>
            <MainForm variant={variant} {...layoutProps} />
            <MainForm variant={variant} {...layoutProps} />
        </Tabs>
    );
};

export default CombinedForms;