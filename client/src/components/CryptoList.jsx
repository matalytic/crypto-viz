import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph.jsx';

class CryptoList extends Component {
  renderCurrency(currencyData) {
    const fromType = Object.keys(currencyData.DISPLAY)[0] ;
    const toType = Object.keys(currencyData.DISPLAY[fromType])[0];
    const price = currencyData.DISPLAY[fromType][toType].PRICE;
    const tradingVolume = currencyData.DISPLAY[fromType][toType].VOLUME24HOURTO;
    const marketCap = currencyData.DISPLAY[fromType][toType].MKTCAP;
    return (
      <tr key={fromType}>
        <td>{fromType}</td>
        <td>{price}</td>
        <td>{tradingVolume}</td>
        <td>{marketCap}</td>
        <td><Graph fromType={fromType} /></td>
      </tr>
      )
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps)(CryptoList);


// {
//     "RAW": {
//         "ETH": {
//             "USD": {
//                 "TYPE": "5",
//                 "MARKET": "CCCAGG",
//                 "FROMSYMBOL": "ETH",
//                 "TOSYMBOL": "USD",
//                 "FLAGS": "4",
//                 "PRICE": 295.97,
//                 "LASTUPDATE": 1502643331,
//                 "LASTVOLUME": 5,
//                 "LASTVOLUMETO": 1478.0500000000002,
//                 "LASTTRADEID": 1334103128,
//                 "VOLUME24HOUR": 797402.6386742513,
//                 "VOLUME24HOURTO": 239264435.2420638,
//                 "OPEN24HOUR": 315.23,
//                 "HIGH24HOUR": 317.2,
//                 "LOW24HOUR": 285.98,
//                 "LASTMARKET": "Gemini",
//                 "CHANGE24HOUR": -19.25999999999999,
//                 "CHANGEPCT24HOUR": -6.109824572534337,
//                 "SUPPLY": 93971820.1866,
//                 "MKTCAP": 27812839620.628006
//             }
//         }
//     },
//     "DISPLAY": {
//         "ETH": {
//             "USD": {
//                 "FROMSYMBOL": "Ξ",
//                 "TOSYMBOL": "$",
//                 "MARKET": "CryptoCompare Index",
//                 "PRICE": "$ 295.97",
//                 "LASTUPDATE": "Just now",
//                 "LASTVOLUME": "Ξ 5",
//                 "LASTVOLUMETO": "$ 1,478.05",
//                 "LASTTRADEID": 1334103128,
//                 "VOLUME24HOUR": "Ξ 797,402.6",
//                 "VOLUME24HOURTO": "$ 239,264,435.2",
//                 "OPEN24HOUR": "$ 315.23",
//                 "HIGH24HOUR": "$ 317.2",
//                 "LOW24HOUR": "$ 285.98",
//                 "LASTMARKET": "Gemini",
//                 "CHANGE24HOUR": "$ -19.26",
//                 "CHANGEPCT24HOUR": "-6.11",
//                 "SUPPLY": "Ξ 93,971,820.2",
//                 "MKTCAP": "$ 27.81 B"
//             }
//         }
//     }
// }