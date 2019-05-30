import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBarView from './navBarView';
import { logout } from '../../auth/register/registerForm/authActions';

const actions = {
  logout
};

const mapState = state => ({
  auth: state.auth
});

class NavBar extends Component {

  handleSignOut = () => {
    this.props.logout();
    this.props.history.goBack();
  }

  render() {
    const { auth, updateUser } = this.props;
    const authenticated = auth.authenticated;
    const currentUser = auth.currentUser
    return (
      <NavBarView 
        authenticated={authenticated}
        handleSignOut={this.handleSignOut}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    );
  }
};

export default withRouter(connect(mapState, actions)(NavBar));