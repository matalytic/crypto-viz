import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import CryptoSearchList from './CryptoSearchList.jsx';
import AllCryptoList from './AllCryptoList.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <AllCryptoList />
        <SearchBar />
        <CryptoSearchList />
      </div>)
  }
}
