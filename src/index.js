import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import reducer, { initialState } from './Checkout/reduser';
import { StateProvider } from './Checkout/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


