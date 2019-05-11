import React, { Component } from 'react';
import { withRouter } from "react-router";
import RegisterFormView from './RegisterFormView';
import api from '../../../utils/api';

class RegisterForm extends Component {

  state = {
    email: {
      value: ''
    },
    password: {
      value: ''
    }
  };

  handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState,
        value
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('Login:', email.value, password.value);
    localStorage.setItem('email', JSON.stringify(email.value));
    localStorage.setItem('password', JSON.stringify(password.value));
  
    api.signUp({
        email: email.value,
        password: password.value
      })
    .then(this.props.setRegistered())
  };
  
  render() {
    const { email, password } = this.state;
    
    return (
      <RegisterFormView 
        email={email} 
        password={password} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
      />
    )
  }
}

export default withRouter(RegisterForm);
