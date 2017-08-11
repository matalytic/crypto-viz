import React, { Component } from 'react';
import CryptoVisual from '../containers/cryptovisual.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <CryptoVisual />
    </div>)
  }
}