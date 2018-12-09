import React from 'react'

import './styles.css'

export const ResultItem = ({value, type}) => 
    <div>
        <label className='result-label' htmlFor={value}>
            {type}:
        </label>
        <span>{value}</span>
    </div>