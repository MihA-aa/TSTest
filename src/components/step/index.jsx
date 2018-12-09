import React from 'react'

import './styles.css'

import { StepItem } from './step-item';

export const Step = ({options, setStepValue}) =>
    options.map(option =>
        <StepItem
            key={option}
            value={option}
            setStepValue={setStepValue}
        />
    );