import React from 'react'

import './styles.css'

export const StepItem = ({value, setStepValue}) =>
    <>
        <input
            type="radio"
            name="radio"
            value={value}
            id={value}
            data-type="transmission"
            onClick={() => setStepValue(value)}
        />
        <label
            className="radio"
            htmlFor={value}
        >
            {value}
        </label>
    </>