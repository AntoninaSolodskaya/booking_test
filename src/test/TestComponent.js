import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <button onClick={incrementCounter} style={{backgroundColor: "green"}}>Increment</button>
        <button onClick={decrementCounter} style={{backgroundColor: "red"}}>Decrement</button>
      </div>
    );
  }
}

export default withRouter(connect(mapState, actions)(TestComponent));