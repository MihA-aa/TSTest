import React from 'react'

import './styles.css';

export const Buttons = (props) => {
    const {
        previousButtonIsVisible,
        nextButtonIsVisible,
        nextButtonIsDisable,
        nextButtonOnClick,
        previousButtonOnClick
    } = props
    return (
        <div className='buttons'>
            {previousButtonIsVisible &&
                <button onClick={previousButtonOnClick}>Previous</button>}
            {nextButtonIsVisible &&
                <button onClick={nextButtonOnClick} id='next' disabled={nextButtonIsDisable}>Next</button>}
        </div>
    );
}