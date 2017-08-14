import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCrypto } from '../actions/index.js';
import { formatNum } from '../utils/utils.js'

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      conversion: '',
      fromType: 'BTC'
    }

    this.performConversion = this.performConversion.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  performConversion(name, value) {
    const { allCurrencies } = this.props;
    let conversionFactor = 0;

    for (var i = 0; i < allCurrencies.length; i++) {
      if (allCurrencies[i].symbol == this.state.fromType) {
        conversionFactor = allCurrencies[i].price_usd;
        break;
      }
    }

    name === 'currency' ? 
      this.setState({conversion: value * conversionFactor}) : 
      this.setState({currency: value * (1/conversionFactor)});
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: event.target.value });
    this.performConversion(name, value);
  }

  onChangeHandle(event) {
    this.setState({fromType: event.target.value});
  }

  componentWillMount() {
    if (this.props.allCurrencies.length === 0) {
      this.props.fetchAllCrypto();
    }
  }

  render() {
    return(
      <div className='conversion-container'>
        <div className='form-inline'>
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input name='currency' className='form-control' 
            placeholder='Cryptocurrency'
            value={this.state.currency}
            onChange={this.onInputChange} />

            <select onChange={this.onChangeHandle}>
              <option>BTC</option>
              <option>ETH</option>
              <option>LTC</option>
              <option>BCH</option>
            </select>

            <input name='conversion' className='form-control' 
            placeholder='Conversion'
            value={this.state.conversion}
            onChange={this.onInputChange} />
          </form>
        </div>
      </div>
      )
  }
}

// Uses all currencies to convert values, therefore list must be populated first
function mapStateToProps( { allCurrencies } ) {
  return { allCurrencies };
}

export default connect(mapStateToProps, { fetchAllCrypto })(CurrencyConverter);