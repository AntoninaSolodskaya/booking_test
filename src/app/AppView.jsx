import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
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
    const { isError, auth, isErr, handleSignOut, user } = this.props;
    return ( 
      <Fragment>
        <ScrollToTop>
          <Fragment>
            <NavBar handleSignOut={handleSignOut} auth={auth} />
            {!isError && 
              <Container className="main">
                <Switch> 
                  {user ? (  
                    <Fragment>
                      <Route
                        exact path='/calendar/:id'
                        render={(props) => <Calendar {...props} user={user} />}
                      />
                      <Route 
                        exact path="/"  
                        render={(props) => <Main {...props} /> }
                        // component={(props) => <Main {...props} />}
                      />
                      <Route 
                        exact path="/test" 
                        render={(props) => <TestComponent {...props} /> }
                        // component={() => <TestComponent />}
                      />
                      <Route 
                        exact path="/charts" 
                        render={(props) => <ChartPage {...props} /> }
                        // component={(props) => <ChartPage {...props} />}
                      />
                    </Fragment>   
                  ) : ( 
                    <Fragment> 
                      <Route
                        exact path='/login'
                        render={(props) => <LoginModal {...props} isErr={isErr} /> }
                      />  
                      <Route 
                        exact path="/register"
                        render={(props) => <RegisterModal {...props} /> }       
                      /> 
                    </Fragment>  
                  )}   
                </Switch> 
              </Container>}
          </Fragment>
        </ScrollToTop>
        {isError && (<Text>Error!!!</Text>)} 
      </Fragment>
    );
  }
};

export default AppView;
