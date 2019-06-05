import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBarView from './navBarView';

class NavBar extends Component {

  render() {
    const { handleSignOut } = this.props;
    return (
      <NavBarView 
        handleSignOut={handleSignOut}
      />
    );
  }
};

export default withRouter(NavBar);