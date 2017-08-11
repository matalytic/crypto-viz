import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CryptoVisual from './containers/cryptovisual.jsx'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import rootReducer from './reducers/index.js'

import App from './components/app.jsx'
import { getCryptoData } from './actions/index.js'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));