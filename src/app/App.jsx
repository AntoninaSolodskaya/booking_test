import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppView from './AppView';

const mapState = state => ({
  auth: state.auth
});

class App extends Component {
  state = {
    isError: false
  };

  render() {
  const { isError } = this.state;
  const { auth } = this.props;
  const isErr = auth.isError
    return (
      <AppView 
        isError={isError} 
        auth={auth}
        isErr={isErr}
      /> 
    );
  }
};

export default connect(mapState, null)(App);