import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxPromise,
    createLogger(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
