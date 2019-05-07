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
  max-width: 125px;
  font-size: 20px;
`;


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
  
    fetch('http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signUp', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
    })
    .then(response => response.json(),
      this.props.history.push('/'))
    .then(json => console.log(json))
    .catch(reason => console.error(reason));
  };
  


  render() {
    const { email, password } = this.state;
    
    return (
      <Block>
        <form onSubmit={this.handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Container>
            <Section className="form-group">
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={email.value}
                onChange={this.handleChange}
                required
              />
            </Section>
            <Section>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                value={password.value}
                onChange={this.handleChange}
                required
              />
            </Section>
            <ButtonWrap>
              <Button type="submit">Register</Button>
            </ButtonWrap>  
          </Container>
        </form> 
      </Block>
    )
  }
}

export default withRouter(RegisterForm);
