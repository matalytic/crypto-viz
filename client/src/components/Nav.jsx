
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
      <div className="navigation">
        <Link to='/'>Search</Link>
        <Link to='/all'>All Cryptocurrencies</Link>
        <Link to='/currency-converter'>Currency Converter</Link>
      </div>
      )
}