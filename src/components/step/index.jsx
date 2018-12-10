import React from 'react'

import { StepItem } from './step-item';

export const Step = ({options, setStepValue, stepValue}) => {
    const currentStepIndex = options.indexOf(stepValue);
    return (
        options.map((option, index) =>
            <StepItem
                key={option}
                value={option}
                setStepValue={setStepValue}
                isChecked={index === currentStepIndex}
            />
        )
    )
}