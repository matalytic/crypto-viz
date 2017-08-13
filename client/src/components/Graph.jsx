import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { fetchCryptoGraph } from '../actions/index.js';

class Graph extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchCryptoGraph(this.props.fromType);
  }
  render() {
    return (
      <div>
        <Sparklines height={120} width={180} data={this.props.graphData[this.props.fromType]}>
          <SparklinesLine color='green' />
        </Sparklines>
      </div>
      )
  }
}

function mapStateToProps({ graphData }) {
  return { graphData };
}

export default connect(mapStateToProps, { fetchCryptoGraph })(Graph);