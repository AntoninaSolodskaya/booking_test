import React, { Component } from 'react';
import axios from 'axios';
import AppView from './AppView';

class App extends Component {

  state = {
    user: null,
    isError: false,
    email: null,
    isAuth: false
  };

  updateUser = (user, afterUpdate) => {
    const email = localStorage.getItem('email');
    this.setState({ 
      user, 
      email: email,
      isAuth: true
    });
   
    localStorage.setItem('user', JSON.stringify(user));
    afterUpdate();
   
    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user._id);
  };

  deleteUser = () => {
    localStorage.clear();

    this.setState({ 
      user: null,
      email: null
     });
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    const email = localStorage.getItem('email');
   
    if (user) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      this.setState({ 
        email: email,
        user: JSON.parse(user),
        isAuth: true
      });
    } 
  };

  render() {

    const { user, isError, email, isAuth } = this.state;
   
    return (
      <AppView 
        user={user} 
        email={email}
        deleteUser={this.deleteUser} 
        updateUser={this.updateUser} 
        isError={isError} 
        isAuth={isAuth}
      /> 
    );
  }
};

export default App;