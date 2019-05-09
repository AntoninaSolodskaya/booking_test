import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
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
    isError: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value, isError: false, submitted: false });
  };

login = (email, password) => {
  console.log(email, password);
  console.log(email, password);
  axios.post(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signIn`, 
    { email, password })
  .then(response => response.data)
  .then(user => {
    if (user) {
      this.props.updateUser(user, () => this.props.history.push('/'));
    }
    return user;   
  })
  .catch(reason => {
    console.error(reason.response);
    if (reason.response.data.message === "Incorrect password or email") {
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
                <div style={{ color: "#FF0000" }}>Please enter your email</div>
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
                <div style={{ color: "#FF0000" }}>Please enter your password</div>
              }   
              {isError &&
                <div style={{ color: "#FF0000" }}>Wrong password or email</div>
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
