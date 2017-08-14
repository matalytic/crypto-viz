import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import AllCryptoList from './AllCryptoList';
import SearchBarAndList from './SearchBarAndList';
import CurrencyConverter from './CurrencyConverter';


export default () => (
  <div>
    <BrowserRouter>
      <div>
        <span className="title">CryptoViz</span>
        <Nav />
        <Switch>
          <Route path="/all" component={AllCryptoList} />
          <Route path="/currency-converter" component={CurrencyConverter} />
          <Route path="/" component={SearchBarAndList} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);
