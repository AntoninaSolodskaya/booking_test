import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Text } from './styled';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import Calendar from '../pages/calendar/Calendar';
import LoginModal from '../auth/login/loginModal/LoginModal';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import TestComponent from '../test/TestComponent';
import ScrollToTop from '../utils/ScrollToTop';
import ChartPage from '../pages/charts/ChartPage';

class AppView extends Component {
  render() {

    const { user, email, deleteUser, updateUser, isError } = this.props;
    
    return ( 
      <Fragment>
        <BrowserRouter>
          <ScrollToTop>
            <Fragment>
              <NavBar user={user} email={email} deleteUser={deleteUser} />
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
                        <Route 
                          exact path="/test" 
                          component={() => <TestComponent />}
                        />
                        <Route 
                          exact path="/charts" 
                          component={() => <ChartPage />}
                        />
                      </Fragment>  
                    ) : (
                      <Fragment>
                        <Route
                          path='/login'
                          render={(props) => <LoginModal {...props} updateUser={updateUser} /> }
                        />  
                        <Route 
                          path="/register"
                          render={(props) => <RegisterModal {...props} /> }       
                        /> 
                      </Fragment> 
                    )}
                  </Switch>
                </Container>}
            </Fragment>
          </ScrollToTop>
          {isError && (<Text>Error!!!</Text>)} 
        </BrowserRouter>
      </Fragment>
    );
  }
};

export default AppView;
