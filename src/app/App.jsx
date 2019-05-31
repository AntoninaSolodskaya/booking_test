import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppView from './AppView';
import { logout, login } from '../auth/authActions/authActions';

const mapState = state => ({
  auth: state.auth
});

const actions = {
  logout,
  login
};

class App extends Component {
  state = {
    isError: false
  }

  handleSignOut = () => {
    this.props.logout();
    localStorage.clear();
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
        handleSignOut={this.handleSignOut}
      /> 
    );
  }
};

export default connect(mapState, actions)(App);