import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container, Text } from './styled';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import Calendar from '../pages/calendar/Calendar';
import LoginModal from '../auth/login/loginModal/LoginModal';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import ScrollToTop from '../utils/ScrollToTop';
import ChartPage from '../pages/charts/ChartPage';

class AppView extends Component {
  
  render() {

    const { isError, handleSignOut } = this.props;
    const user = localStorage.getItem('user'); 
    console.log("user", user)
   
    return ( 
      <Fragment>
        <ScrollToTop>
          <Fragment>
            <NavBar handleSignOut={handleSignOut} />
            {!isError && 
              <Container className="main">
                <Switch> 
                  {user ? ( 
                    <Fragment>
                      <Route
                        exact path='/calendar/:id'
                        render={(props) => <Calendar {...props} />}
                      />
                      <Route 
                        exact path="/"  
                        render={(props) => <Main {...props} /> } 
                      />
                      <Route 
                        exact path="/charts" 
                        render={(props) => <ChartPage {...props} /> }
                      />
                    </Fragment>   
                   ) : (  
                    <Fragment> 
                      <Route
                        exact path='/login'
                        render={(props) => <LoginModal {...props} /> }
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
