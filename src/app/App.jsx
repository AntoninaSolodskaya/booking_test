import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AppView from './AppView';

const mapState = state => ({
  userId: state.login.userId,
  email: state.login.email,
  token: state.login.token
});

class App extends Component {

  // deleteUser = () => {
  //   localStorage.clear();

  //   this.setState({ 
  //     user: null,
  //     email: null
  //    });
  // }

  componentDidMount() {


    if (this.props.userId) {
      axios.defaults.headers.common['Authorization'] = this.props.token;
    } 
  };

  render() {

    const { userId, isError, email } = this.props;
   
    return (
      <AppView 
        userId={userId} 
        email={email}
        deleteUser={this.deleteUser} 
        updateUser={this.updateUser} 
        isError={isError} 
      /> 
    );
  }
};

export default connect(mapState, null)(App);