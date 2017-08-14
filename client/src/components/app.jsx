import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav.jsx'
import AllCryptoList from './AllCryptoList.jsx';
import SearchBarAndList from './SearchBarAndList.jsx'
import CurrencyConverter from './CurrencyConverter.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="bg">
        <BrowserRouter>
          <div>
            <span className='title'>CryptoViz</span>
            <Nav />
            <Switch>
              <Route path="/all" component={AllCryptoList}/>
              <Route path="/currency-converter" component={CurrencyConverter}/>
              <Route path="/" component={SearchBarAndList}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      )
  }
}
