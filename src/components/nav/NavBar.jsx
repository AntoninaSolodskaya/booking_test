import React, { Component } from 'react';
import NavBarView from './navBarView';

class NavBar extends Component {
  render() {
    const { userId, deleteUser, email } = this.props;
    return (
      <NavBarView 
        userId={userId} 
        deleteUser={deleteUser} 
        email={email} 
      />
    );
  }
};

export default NavBar;