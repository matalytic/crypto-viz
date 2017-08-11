import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getCryptoData } from '../actions';

// import CurrentValue from './CurrentValue';
// import TransactionVolumeGraph from './TransactionVolumeGraph';
// import Description from './Description';

class CryptoVisual extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCryptoData());
  }

  render() {
    return (
      <div>
        <h1>Crypto
        </h1>
      </div>
      )
  }
}

function mapStateToProps() {

}

export default connect(state => state)(CryptoVisual);
