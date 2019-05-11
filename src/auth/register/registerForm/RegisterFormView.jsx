import React, { Component } from 'react';
import { 
  Block, 
  Form, 
  Container, 
  Section, 
  Label, 
  Input, 
  ButtonWrap, 
  Button 
} from './styled';

class RegisterFormView extends Component {
  render() {
    const { handleSubmit, handleChange, email, password } = this.props;
    return (
      <Block>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Section className="form-group">
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={email.value}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </Section>
            <ButtonWrap>
              <Button type="submit">Register</Button>
            </ButtonWrap>  
          </Container>
        </Form> 
      </Block>
    )
  }
}

export default RegisterFormView;