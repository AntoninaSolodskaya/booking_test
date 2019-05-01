import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  max-width: 80%;
`;

const Label = styled.label`
  color: #311e1e;
  font-size: 16px;
`;

const Input = styled.input`
`;

const Button = styled.button`
  background-color: gray;
  color: darkgray;
  border-radius: 5px;
`;

class LoginForm extends Component {

  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    console.log('Text field value is: ' + this.state.value);
  }

  render() {
    return (
      <Block>
        <Section>
          <Label>Email:</Label>
          <Input
            type="text"
            placeholder="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Section>
        <Section>
          <Label>Password:</Label>
          <Input></Input>
        </Section>
        <Button onClick={this.handleSubmit}>Login</Button>
      </Block>
    )
  }
}

export default LoginForm;