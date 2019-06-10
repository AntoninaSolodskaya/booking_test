import React, { Component } from 'react';
import { 
  Block, 
  Form, 
  Container, 
  Section, 
  Label, 
  Input, 
  Text, 
  ButtonWrap, 
  Button 
} from './styled';

class LoginFormView extends Component {
  render() {
    const { email, password, submitted, isError, handleSubmit, handleChange } = this.props; 
    return (
      <Block>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Section className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="form-control"
                value={email}
                onChange={handleChange}
              />
              {submitted && !email && 
                <Text>Please enter your email</Text>
              }
            </Section>
            <Section  className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                className="form-control"
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
