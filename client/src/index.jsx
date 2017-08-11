import React from 'react';
import ReactDOM from 'react-dom';
import CryptoVisual from './containers/cryptovisual.jsx'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';

// import CurrentValue from './CurrentValue';
// import TransactionVolumeGraph from './TransactionVolumeGraph';
// import Description from './Description';

import rootReducer from './reducers/index.js'
import { getCryptoData } from './actions/index.js'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
  }

  render () {
    return (
      <div>
        <CryptoVisual />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));