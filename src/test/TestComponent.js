import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { openModal } from '../auth/modalActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter, 
  openModal
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data, openModal } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <button onClick={incrementCounter} style={{backgroundColor: "green"}}>Increment</button>
        <button onClick={decrementCounter} style={{backgroundColor: "red"}}>Decrement</button>
        <button onClick={() => openModal()} style={{backgroundColor: "blue"}}>Modal</button>
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);