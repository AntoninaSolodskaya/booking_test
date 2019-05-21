import React, { Component } from 'react';
import axios from 'axios';
import AppView from './AppView';

class App extends Component {

  state = {
    user: null,
    isError: false,
    email: null
  };

  updateUser = (user, afterUpdate) => {
    const email = localStorage.getItem('email');
    this.setState({ 
      user, 
      email: email
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
        user: JSON.parse(user)
      });
    } 
  };

  render() {

    const { user, isError, email } = this.state;
   
    return (
      <AppView 
        user={user} 
        email={email}
        deleteUser={this.deleteUser} 
        updateUser={this.updateUser} 
        isError={isError} 
      /> 
    );
  }
};

export default App;