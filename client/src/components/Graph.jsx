import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { fetchCryptoGraph, fetchCryptoGraphDb } from '../actions/index.js';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
    }
  }

  componentDidMount() {
   axios.get(`/api/${this.props.fromType}`)
    .then(currency => {
      console.log(currency);
      this.setState({graphData: currency.data.graphData});
    })
  }

  render() {
    const colors = ['#37A359', '#416648', '#5E85A8', '#519180', '#63B78A', '#7FC495', '#3C556B']
    const rand = Math.floor(Math.random() * colors.length);

    return (
      <div>
        <Sparklines height={300} width={375} data={this.state.graphData} >
          <SparklinesLine color={colors[rand]} />
        </Sparklines>
      </div>
    );
  }
}

function mapStateToProps({ graphData }) {
  return { graphData };
}

export default connect(mapStateToProps, { fetchCryptoGraph })(Graph);