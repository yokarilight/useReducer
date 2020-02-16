import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.scss';
import GlobalState from './context/GlobalState';

ReactDOM.render(
    <GlobalState />,
  document.getElementById('root')
);

