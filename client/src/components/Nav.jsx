
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
      <ul className='nav'>
        <li><Link to='/'>Search</Link></li>
        <li><Link to='/all'>All Cryptocurrencies</Link></li>
      </ul>
      )
}