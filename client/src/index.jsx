import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import rootReducer from './reducers/index.js'
import ReduxPromise from 'redux-promise';
import App from './components/App.jsx'

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxPromise,
    createLogger()
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));