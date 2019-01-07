/* tslint:disable */
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { Typography, InputLabel } from "@material-ui/core";
import { Range } from "rc-slider";
import { ValuesContainer, SliderContainer, trackStyle, handlerStyle, railStyle, LabelContainer } from "./style";

export interface ReactSliderProps {
  min: number;
  max: number;
  step: number;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomizedRange = ({ min, max, step, label, onChange }: ReactSliderProps) => {
  const [sliderValue, setSliderValue] = useState([min, max]);

  const onSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  return (
    <SliderContainer>
      {label && (<LabelContainer>
        <InputLabel>{label}</InputLabel>
      </LabelContainer>)}
      <Range
        allowCross={false}
        trackStyle={[{ ...trackStyle }]}
        handleStyle={[{ ...handlerStyle }, { ...handlerStyle}]}
        railStyle={{ ...railStyle }}
        step={step}
        value={sliderValue}
        onChange={onSliderChange}
      />
      <ValuesContainer>
        <Typography variant={`h6`}>{sliderValue[0]}</Typography>
        <Typography variant={`h6`}>{sliderValue[1]}</Typography>
      </ValuesContainer>
    </SliderContainer>
  );
};

export default CustomizedRange;