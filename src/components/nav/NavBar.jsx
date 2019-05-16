import React, { Component } from 'react';
import NavBarView from './navBarView';

class NavBar extends Component {

  render() {

    const { user, deleteUser, email } = this.props;

    return (
      <NavBarView 
        user={user} 
        deleteUser={deleteUser} 
        email={email} 
      />
    );
  }
};

export default NavBar;