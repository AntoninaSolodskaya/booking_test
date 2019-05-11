import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Text } from './styled';
import NavBar from '../../components/nav/NavBar';
import Main from '../../components/main/Main';
import Calendar from '../../components/calendar/Calendar';
import LoginModal from '../../auth/login/loginModal/LoginModal';
import RegisterModal from '../../auth/register/registerModal/RegisterModal';

class AppView extends Component {
  render() {

    const { user, deleteUser, updateUser, isError } = this.props;

    return ( 
      <Fragment>
        <BrowserRouter>
          <NavBar user={user} deleteUser={deleteUser} />
          {/* {!isError &&  user && */}
            <Container className="main">
              <Switch>
                <Route 
                  exact path="/" 
                  component={() => <Main user={user} />}
                />
                <Route
                  path='/login'
                  render={(props) => <LoginModal {...props} updateUser={updateUser} />}
                />
                <Route exact path="/register" component={RegisterModal} />
                <Route
                  path='/calendar/:id'
                  render={(props) => <Calendar {...props} user={user} />}
                />
              </Switch>
            </Container>
            {/* } */}
          {isError && (<Text>Error!!!</Text>)} 
        </BrowserRouter>
      </Fragment>
    );
  }
};

export default AppView;
