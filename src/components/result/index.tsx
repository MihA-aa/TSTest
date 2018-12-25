import React from 'react'

import { ResultItem } from './result-item'

interface ResultProps {
    model: {
        [key: string]: string
    }
}

export const Result : React.SFC<ResultProps> = ({model}) =>
    <>
        {Object.keys(model)
            .map(key => <ResultItem key={key} type={key} value={model[key]}/>)}
    </>