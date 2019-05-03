import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from '../firebase';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Card from '../components/Card';
import CardPage from '../components/CardPage';
import LoginModal from '../auth/login/LoginModal';
import SignUp from '../auth/login/SignUp';

const Container = styled.div`
  flex: 1 0 auto;
  min-width: 350px;
  margin: 10px 10px;
`;

class App extends Component {

  state = {
    authenticated: false,
    user: null
  };
 
  componentDidMount() {
    this.authListener();
  };

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        authenticated: true
      })
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar authenticated={this.state.authenticated} user={this.state.user} />
          <Container className="main">
            <Switch>
              <Route 
                exact path="/" 
                component={() => <Main authenticated={this.state.authenticated} user={this.state.user} />}
              />
              <Route exact path="/login" component={LoginModal} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/card" component={Card} />
              <Route exact path="/card/:id" component={CardPage} />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default App;