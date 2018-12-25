import React from 'react'

import './styles.css'

interface ResultItemProps {
    value: string;
    type: string;
}

export const ResultItem : React.SFC<ResultItemProps> = ({value, type}) => 
    <div>
        <label className='result-label' htmlFor={value}>
            {type}:
        </label>
        <span>{value}</span>
    </div>