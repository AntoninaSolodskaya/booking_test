import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import firebase from '../../firebase';
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
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 3 ? null : 'Email must be longer than 3 characters'
    });
  }

  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError:
        password.length > 3 ? null : 'Password must be longer than 3 characters' 
    });
  }
  

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const logindata={
      email:this.state.email,
      password:this.state.password
     }
     console.log(logindata);
     axios.post('http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signUp', logindata )
     .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  

    // const user = {
    //   email: this.state.email
    // };
   
    // axios.post(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/signUp`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    // }

  render() {
    const { email, password, emailError, passwordError } = this.state;
    
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
                value={email}
                onChange={this.handleChange}
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                onBlur={this.validateEmail}
              />
               <div className='invalid-feedback' style={{ color: "#FF0000" }}>{emailError}</div>
       
            </Section>
            <Section>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={this.handleChange}
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                onBlur={this.validatePassword}
              />
              <div className='invalid-feedback' style={{ color: "#FF0000" }}>{passwordError}</div>
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
