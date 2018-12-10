import React from 'react'

import './styles.css'

export const StepItem = ({value, setStepValue, isChecked}) => {
    const additionalClass = isChecked ? 'checked' : '';
    return(
    <>
        <input
            type='radio'
            name='radio'
            value={value}
            id={value}
            onClick={() => setStepValue(value)}
        />
        <label
            className={`radio ${additionalClass}`}
            htmlFor={value}
        >
            {value}
        </label>
    </>)
}