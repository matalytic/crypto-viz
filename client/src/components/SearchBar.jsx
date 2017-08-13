import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCrypto } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchCrypto(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className='form-control' 
        placeholder='Track Your Favorite Cryptocurrencies'
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      )
  }
}

export default connect(null, { fetchCrypto })(SearchBar);