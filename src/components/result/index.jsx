import React from 'react'

import { ResultItem } from './result-item'

export const Result = ({model}) =>
    Object.keys(model)
        .map(key => <ResultItem key={key} type={key} value={model[key]}/>);