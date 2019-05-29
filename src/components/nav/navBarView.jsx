import React, { Component } from 'react';
import { 
  Header,
  Container, 
  StyledLink, 
  Logo, 
  NavList, 
  Nav, 
  Span, 
  Label, 
  Input, 
  List, 
  SpanName, 
  SignSection 
} from './styled';

class NavBarView extends Component {
  render() {
    const { userId, deleteUser, email } = this.props;
    return (
      <Header>
        <Container>
          <Logo>Rooms</Logo>
          <Nav>
            <Input type="checkbox" name="menu" id="btn-menu" />
            <Label htmlFor="btn-menu">
              <Span></Span>
              <Span></Span>
              <Span></Span>
            </Label>
            <NavList>
              <List>
                <StyledLink to="/">Home</StyledLink>
              </List> 
              <List>
                <StyledLink to="/test">Test</StyledLink>
              </List> 
              <List>
                <StyledLink to="/charts">Charts</StyledLink>
              </List> 
              <List>
                <StyledLink to="/testCharts">TestCharts</StyledLink>
              </List> 
              {userId &&
                <SignSection>
                  <SpanName style={{marginLeft: "18px"}}>{email}</SpanName>
                  <List>
                    <StyledLink to="/" onClick={deleteUser}>Sign Out</StyledLink>
                  </List>  
                </SignSection>}
              {!userId &&
                <SignSection>
                  <List>
                    <StyledLink to="/register">Sign Up</StyledLink>
                  </List>   
                  <List>
                    <StyledLink to="/login">Sign In</StyledLink>
                  </List>  
                </SignSection>}
            </NavList>
          </Nav>
        </Container>
      </Header>
    );
  }
};

export default NavBarView;