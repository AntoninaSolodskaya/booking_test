import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Card from '../components/Card';
import LoginForm from '../auth/login/LoginForm';

const Container = styled.div`
  flex: 1 0 auto;
  min-width: 350px;
  margin: 10px 10px;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Container className="main">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={LoginForm} />
              <Route path="/card/:id" component={Card} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;