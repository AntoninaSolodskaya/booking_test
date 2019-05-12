import React, { Component } from 'react';
import { withRouter } from "react-router";
import RegisterFormView from './RegisterFormView';
import axios from 'axios';

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
  
    axios.post('http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signUp',
      {
        email: email.value,
        password: password.value
      })
    .then(response => response.data,
      this.props.setRegistered())
    .catch(reason => console.error(reason));
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
    );
  }
};

export default withRouter(RegisterForm);
