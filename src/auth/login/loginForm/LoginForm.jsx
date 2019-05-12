import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginFormView from './LoginFormView';
import api from '../../../utils/api';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    submitted: false,
    isError: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value, isError: false, submitted: false });
  };

  login = (email, password) => {
    api.signIn(email, password)
    .then((user) => {
      if (user) {
        this.props.updateUser(user, () => this.props.history.push('/'));
      }  
    })
    .catch(reason => {
      if (reason.data.message === "Incorrect password or email") {
        this.setState({ isError: true });
      }
    }) 
  };
 
  handleSubmit = (event) => { 
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password, isError } = this.state;

    if (!(email && password) || isError) {
      return;
    }
    this.login(email, password)
  };

  render() {
    const { email, password, submitted, isError } = this.state; 
    return (
      <LoginFormView 
        email={email} 
        password={password} 
        submitted={submitted} 
        isError={isError}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
};

export default withRouter(LoginForm);
