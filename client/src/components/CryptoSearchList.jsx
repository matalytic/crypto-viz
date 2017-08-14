import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph.jsx';
import { formatNum } from '../utils/utils.js';

class CryptoSearchList extends Component {

  renderCurrency(currencyData) {
    const name = currencyData.name;
    const price = formatNum(currencyData.price_usd);
    const tradingVolume = formatNum(currencyData['24h_volume_usd']);
    const marketCap = formatNum(currencyData.market_cap_usd);
    const fromType= currencyData.symbol;

    return (
      <tr key={fromType}>
        <td><span className='currency-name'>{name}</span></td>
        <td><span className='price'>{price}</span></td>
        <td>{tradingVolume}</td>
        <td>{marketCap}</td>
        <td><Graph fromType={fromType} /></td>
      </tr>
      )
  }

  render() {
    return (
      <div className='crypto-list-container'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Price</th>
              <th>Trading Volume</th>
              <th>Market Cap</th>
              <th>Snap Shot</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currencies.map(this.renderCurrency)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps( { currencies } ) {
  return { currencies };
}

export default connect(mapStateToProps)(CryptoSearchList);
