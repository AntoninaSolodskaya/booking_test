import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapState = state => ({
  auth: state.auth
});

class NavBarView extends Component {
  render() {
    
    const { handleSignOut, auth } = this.props;
    const email = auth.currentUser;
    const authenticated = auth.authenticated;
    
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
                <StyledLink to="/booking_test/">Home</StyledLink>
              </List> 
              <List>
                <StyledLink to="/booking_test/charts">Charts</StyledLink>
              </List> 
              {authenticated &&   
                <SignSection>
                  <SpanName style={{marginLeft: "18px"}}>{email}</SpanName> 
                  <List>
                    <StyledLink to="/booking_test/" onClick={handleSignOut}>Sign Out</StyledLink>
                  </List>  
                </SignSection>}
              {!authenticated &&  
                <SignSection>
                  <List>
                    <StyledLink to="/booking_test/register">Sign Up</StyledLink>
                  </List>   
                  <List>
                    <StyledLink to="/booking_test/login">Sign In</StyledLink>
                  </List>  
                </SignSection>}
            </NavList>
          </Nav>
        </Container>
      </Header>
    );
  }
};

export default connect(mapState)(NavBarView);