import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Text } from './styled';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import Calendar from '../pages/calendar/Calendar';
import LoginModal from '../auth/login/loginModal/LoginModal';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import ScrollToTop from '../utils/ScrollToTop';

class AppView extends Component {
  render() {

    const { user, deleteUser, updateUser, isError } = this.props;

    return ( 
      <Fragment>
        <BrowserRouter>
          <ScrollToTop>
            <NavBar user={user} deleteUser={deleteUser} />
            {!isError && 
              <Container className="main">
                <Switch>
                  {user ? (
                    <Fragment>
                      <Route
                        path='/calendar/:id'
                        render={(props) => <Calendar {...props} user={user} />}
                      />
                      <Route 
                        exact path="/" 
                        component={() => <Main user={user} />}
                      />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Route
                        path='/login'
                        render={(props) => <LoginModal {...props} updateUser={updateUser} />}
                      />
                      <Route exact path="/register" component={RegisterModal} />
                    </Fragment>
                  )}
                </Switch>
              </Container>}
            </ScrollToTop>
          {isError && (<Text>Error!!!</Text>)} 
        </BrowserRouter>
      </Fragment>
    );
  }
};

export default AppView;
