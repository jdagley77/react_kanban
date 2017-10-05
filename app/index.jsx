// index imports App
// App imports Notes
// Notes imports Note and Editable

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}
// this page renders the app component
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
