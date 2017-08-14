import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { fetchCryptoGraph } from '../actions/index.js';

class Graph extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCryptoGraph(this.props.fromType);
  }

  render() {
    const colors = ['#37A359', '#416648', '#5E85A8', '#519180', '#63B78A', '#7FC495', '#3C556B']
    const rand = Math.floor(Math.random() * colors.length);

    return (
      <div>
        <Sparklines height={300} width={375} data={this.props.graphData[this.props.fromType]} >
          <SparklinesLine color={colors[rand]} />
        </Sparklines>
      </div>
      )
  }
}

function mapStateToProps({ graphData }) {
  return { graphData };
}

export default connect(mapStateToProps, { fetchCryptoGraph })(Graph);