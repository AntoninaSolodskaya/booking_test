import React, { Component } from 'react';
import { 
  Block, 
  Form, 
  Container, 
  Section, 
  Label, 
  Input, 
  ButtonWrap, 
  Button,
  ErrorText
} from './styled';

class RegisterFormView extends Component {
  render() {
    const { handleSubmit, handleChange, email, password, errors } = this.props;
    return (
      <Block>
        <Form onSubmit={handleSubmit}>
          <Container>
          {errors && errors.map(error => (
            <ErrorText key={error}>Error: {error}</ErrorText>
          ))}
            <Section className="form-group">
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={email.value}
                onChange={handleChange}
              />
            </Section>
            <Section>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Your Password"
                value={password.value}
                onChange={handleChange}
              />
            </Section>
            <ButtonWrap>
              <Button type="submit">Register</Button>
            </ButtonWrap>  
          </Container>
        </Form> 
      </Block>
    );
  }
};

export default RegisterFormView;