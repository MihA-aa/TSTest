import React from 'react';
import ReactDOM from 'react-dom';

import Wizard from './components/wizard';
import { data, steps } from './data';

import './index.css';

ReactDOM.render(<Wizard data={data} steps={steps}/>, document.getElementById('root'));

