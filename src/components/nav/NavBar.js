import React, { Component } from 'react';
import NavBarView from './navBarView';

class NavBar extends Component {
  
  render() {
    const { user, deleteUser } = this.props;
    return (
      <NavBarView user={user} deleteUser={deleteUser} />
    );
  }
};

export default NavBar;