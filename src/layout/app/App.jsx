import React, { Component } from 'react';
import axios from 'axios';
import AppView from './AppView';

class App extends Component {

  state = {
    user: null,
    isError: false
  };

  updateUser = (user, afterUpdate) => {
    this.setState({ user });
    localStorage.setItem('user', JSON.stringify(user));
    afterUpdate();
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user._id);
  };

  deleteUser = () => {
    localStorage.removeItem('user');
    this.setState({ user: null });
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      this.setState({ 
        user: JSON.parse(user),  
      });
    }  
  };

  render() {
    const { user, isError } = this.state;
    return (
      <AppView user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} /> 
    );
  }
};

export default App;