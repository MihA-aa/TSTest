import React from 'react'

import './styles.css';

export const Buttons = (props) => {
    const {
        currentStep,
        stepsCount,
        nextButtonIsDisable,
        nextButtonOnClick,
        previousButtonOnClick
    } = props
    const previousButtonIsVisible = currentStep !== 1;
    const nextButtonIsVisible = currentStep <= stepsCount;
    return (
        <div className='buttons'>
            {previousButtonIsVisible &&
                <button onClick={previousButtonOnClick}>Previous</button>}
            {nextButtonIsVisible &&
                <button onClick={nextButtonOnClick} id='next' disabled={nextButtonIsDisable}>Next</button>}
        </div>
    );
}