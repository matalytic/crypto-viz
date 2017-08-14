import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav.jsx'
import AllCryptoList from './AllCryptoList.jsx';
import SearchBarAndList from './SearchBarAndList.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/all" component={AllCryptoList}/>
              <Route path="/" component={SearchBarAndList}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      )
  }
}
