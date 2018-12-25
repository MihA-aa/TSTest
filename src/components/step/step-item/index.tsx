import React from 'react'

import './styles.css'

interface StepItemProps {
    value: string;
    setStepValue: (value: string) => () => void;
    isChecked: boolean;
}

export const StepItem : React.SFC<StepItemProps> = ({value, setStepValue, isChecked}) => 
    <>
        <input
            type='radio'
            name='radio'
            value={value}
            id={value}
            onClick={setStepValue(value)}
        />
        <label
            className={`radio ${isChecked && 'checked'}`}
            htmlFor={value}
        >
            {value}
        </label>
    </>