import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import CryptoList from './CryptoList.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <SearchBar />
        <CryptoList />
      </div>)
  }
}
