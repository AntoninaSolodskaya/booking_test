import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Text } from './styled';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import Calendar from '../pages/calendar/Calendar';
import LoginModal from '../auth/login/loginModal/LoginModal';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import ErrorModal from '../pages/errorModal/ErrorModal';
import ScrollToTop from '../utils/ScrollToTop';

class AppView extends Component {
  render() {

    const { user, email, deleteUser, updateUser, isError, isAuth } = this.props;
    
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
                        <Route path='/modal' component={ErrorModal} />
                        <Route
                          path='/calendar/:id'
                          render={(props) => <Calendar {...props} user={user} />}
                        />
                        <Route 
                          exact path="/" 
                          component={() => <Main user={user} />}
                        />
                        <Route path='/modal' component={ErrorModal} />
                      </Fragment>  
                    ) : (
                      <Fragment>
                        <Route
                          path='/login'
                          render={(props) => 
                            // if (isAuth === true) {
                            //   return 
                              <LoginModal {...props} updateUser={updateUser} />
                            // } else {
                            //   return <Redirect from="/login" to={"/"} />;
                            // }
                          }
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
