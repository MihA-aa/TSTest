import React from 'react'

import './styles.css';

interface ButtonsProps {
    previousButtonIsVisible: boolean;
    nextButtonIsVisible: boolean;
    nextButtonIsDisable: boolean;
    nextButtonOnClick: () => void;
    previousButtonOnClick: () => void;
}

export const Buttons : React.SFC<ButtonsProps> = (props) => {
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