import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBarView from './navBarView';

const mapState = state => ({
  auth: state.auth
});

class NavBar extends Component {

  render() {
    const { auth, handleSignOut } = this.props;
    return (
      <NavBarView 
        handleSignOut={handleSignOut}
        auth={auth}
      />
    );
  }
};

export default withRouter(connect(mapState, null)(NavBar));