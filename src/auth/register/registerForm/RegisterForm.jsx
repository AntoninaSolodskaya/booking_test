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
    },
    errors: []
  };

  validate = ( email, password ) => {
   
    const errors = [];
  
    if (email.value.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.value.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.value.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
  
    if (password.value.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
  
    return errors;
  }

  handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState,
        value
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const errors = this.validate(email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    
    console.log('Login:', email.value, password.value);
    localStorage.setItem('email', JSON.stringify(email.value));
    localStorage.setItem('password', JSON.stringify(password.value));
    api.signUp(email, password)
    .then(this.props.setRegistered())
  };
  
  render() {
    const { email, password, errors } = this.state;
    
    return (
      <RegisterFormView 
        email={email} 
        password={password} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        errors={errors}
      />
    );
  }
};

export default withRouter(RegisterForm);
