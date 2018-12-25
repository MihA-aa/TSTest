import React from 'react'

import { StepItem } from './step-item';

interface StepProps {
    options: string[];
    setStepValue: (value: string) => () => void;
    stepValue: string;
}

export const Step : React.SFC<StepProps> = ({options, setStepValue, stepValue}) => 
    <>
        {options.map((option) =>
            <StepItem
                key={option}
                value={option}
                setStepValue={setStepValue}
                isChecked={option === stepValue}
            />
        )}
    </>