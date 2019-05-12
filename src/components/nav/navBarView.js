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
    const { user, deleteUser } = this.props;
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
            {user &&
              <SignSection>
                <SpanName>{user._id}</SpanName>
                <List>
                  <StyledLink to="/" onClick={deleteUser}>Sign Out</StyledLink>
                </List>  
              </SignSection>}
            {!user &&
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