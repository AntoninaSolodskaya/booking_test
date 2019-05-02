import React, { Component } from 'react';
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

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
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
    event: {
      email: '',
      password: '',
      user: '',
      rememberMe: false
    } 
  };

  handleChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event: newEvent
    })
  }
  

  handleSubmit = event => {
    console.log(this.state.event);
    localStorage.setItem("user");
    event.preventDefault()
  }

  render() {
    const { event } = this.state;
    return (
      <Block>
        <form onSubmit={this.handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
          <Container>
            <Section>
              <Label>Name:</Label>
              <Input
                name="user"
                type="text"
                placeholder="Your Name"
                value={event.name}
                onChange={this.handleChange}
                required
              />
            </Section> 
            <Section>
              <Label>Email:</Label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={event.email}
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
                value={event.password}
                onChange={this.handleChange}
                required
              />
            </Section>
            <Checkbox>
              <Label>Remember me</Label>
              {/* <Input name="rememberMe" checked={rememberMe} onChange={this.handleChange} type="checkbox" style={{ minHeight: "18px", width: "10%"}}/>  */}
              <Input  onChange={this.handleChange} type="checkbox" style={{ minHeight: "18px", width: "10%"}}/>
            </Checkbox>
            <ButtonWrap>
              <Button type="submit">Login</Button>
            </ButtonWrap>  
          </Container>
        </form> 
      </Block>
    )
  }
}

export default LoginForm;
