import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import CardPage from '../components/CardPage';
import LoginModal from '../auth/login/LoginModal';
import RegisterModal from '../auth/register/RegisterModal';


const Container = styled.div`
  flex: 1 0 auto;
  min-width: 350px;
  margin: 10px 10px;
`;

const Text = styled.p`
  color: #000000;
  font-size: 20px;
  text-align: center;
`;


class App extends Component {

  state = {
    user: null,
    isLoading: false,
    isError: false
  };

  updateUser = (user, afterUpdate) => {
    this.setState({ user });
    debugger
    localStorage.setItem('user', JSON.stringify(user));
    afterUpdate();
    console.log(user)
    localStorage.setItem("token", user.token)
    localStorage.setItem("userId", user._id)
    console.log(user.token)
    console.log(user._id)
  };

  deleteUser = () => {
    // localStorage.removeItem('user');
    this.setState({ user: null });
  };

  componentDidMount() {
    
    if (localStorage.getItem('user')) {
      this.setState({ 
        user: JSON.parse(localStorage.getItem('user')),  
      });
    }  
  };

  render() {
    const { user, isError } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar user={user} deleteUser={this.deleteUser} />
          {!isError && user &&
            <Container className="main">
              <Switch>
                <Route 
                  exact path="/" 
                  component={() => <Main user={user} />}
                />
                <Route
                  path='/login'
                  render={(props) => <LoginModal {...props} updateUser={this.updateUser} />}
                />
                <Route exact path="/register" component={RegisterModal} />
              
                <Route
                  path='/card/:id'
                  render={(props) => <CardPage {...props} user={user} />}
                />
              </Switch>
            </Container>}
          {isError && (<Text>Error!!!</Text>)}
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default App;