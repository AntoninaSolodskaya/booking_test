import React, { Component } from 'react';
import { Block, Form, Container, Section, Label, Input, Text, ButtonWrap, Button } from './styled';

class LoginFormView extends Component {
  render() {
    const { email, password, submitted, isError, handleSubmit, handleChange } = this.props; 
    return (
      <Block>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Section>
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChange}
              />
              {submitted && !email && 
                 <Text>Please enter your email</Text>
              }
            </Section>
            <Section>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={handleChange}
              />
              {submitted && !password &&
                <Text>Please enter your password</Text>
              }   
              {isError &&
                <Text>Wrong password or email</Text>
              }  
            </Section>
            <ButtonWrap>
              <Button type="submit">Login</Button>
            </ButtonWrap> 
          </Container>
        </Form> 
      </Block>
    );
  }
};

export default LoginFormView;
