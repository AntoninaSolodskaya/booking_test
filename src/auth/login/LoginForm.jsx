import React, { Component } from 'react';
import { withRouter } from "react-router";
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

const Label = styled.label`
  color: #311e1e;
  font-size: 16px;
  padding-bottom: 6px;
`;

const Input = styled.input`
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  margin: auto;
`;

const Button = styled.button`
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 100px;
  font-size: 20px;
`;


class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    submitted: false,
    error: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  login = (email, password) => {
    fetch(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signIn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.goBack();
      }
      return user;
    })
    .catch(reason => console.error(reason)) 
  };

  handleSubmit = (event) => { 
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
  
    if (!(email && password)) {
      return;
    }
    
    this.login(email, password)
  };

  render() {
    const { email, password, submitted, error } = this.state; 
    return (
      <Block>
        <form onSubmit={this.handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Container>
            <Section className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="form-control"
                value={email}
                onChange={this.handleChange}
              />
              {submitted && !email &&
                <div className='invalid-feedback' style={{ color: "#FF0000" }}>{error}</div>
              }
            </Section>
            <Section className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                className="form-control"
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !password &&
                <div className='invalid-feedback' style={{ color: "#FF0000" }}>{error}</div>
              }   
            </Section>
            <ButtonWrap>
              <Button type="submit">Login</Button>
            </ButtonWrap> 
          </Container>
        </form> 
      </Block>
    );
  }
};

export default withRouter(LoginForm);
