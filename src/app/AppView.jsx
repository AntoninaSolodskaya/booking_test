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
import TestChart from '../pages/charts/testChart';

class AppView extends Component {
  
  render() {

    const { isError, auth, isErr } = this.props;
    const authenticated = auth.authenticated;
    return ( 
      <Fragment>
        <ScrollToTop>
          <Fragment>
            <NavBar />
            {!isError && 
              <Container className="main">
                <Switch>
                  {authenticated ? ( 
                    <Fragment>
                      <Route
                        path='/calendar/:id'
                        render={(props) => <Calendar {...props} />}
                      />
                      <Route 
                        exact path="/"  
                        component={() => <Main />}
                      />
                      <Route 
                        exact path="/test" 
                        component={() => <TestComponent />}
                      />
                      <Route 
                        exact path="/charts" 
                        component={() => <ChartPage />}
                      />
                       <Route 
                        exact path="/testCharts" 
                        component={() => <TestChart />}
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
