import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container, Text } from './styled';
import axios from 'axios';
import NavBar from '../components/nav/NavBar';
import Main from '../pages/main/Main';
import Calendar from '../pages/calendar/Calendar';
import LoginModal from '../auth/login/loginModal/LoginModal';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import ChartPage from '../pages/charts/ChartPage';
import ScrollToTop from '../utils/ScrollToTop';
import { logout, login } from '../auth/authActions/authActions';
import { loadAllHalls } from '../pages/main/hallsAction/hallsActions';
import { loadAllTickets } from '../pages/calendar/ticketsActions/ticketActions';

const mapState = state => ({
  auth: state.auth
});

const actions = {
  logout,
  login,
  loadAllHalls,
  loadAllTickets
};

class App extends Component {
  state = {
    isError: false
  }

  handleSignOut = () => {
    this.props.logout();
    localStorage.clear();
  };
  
  componentDidMount() {
    const user = localStorage.getItem('user'); 
    
    if (user) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      this.props.loadAllHalls();
      this.props.loadAllTickets();
    } 
  };

  render() {

    const { isError } = this.state;
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    console.log("App", authenticated)
  
    return (
      <Fragment>
        <ScrollToTop>
          <Fragment>
            <NavBar handleSignOut={this.handleSignOut} />
            {!isError && 
              <Container className="main">
                <Switch> 
                  {authenticated ? ( 
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

export default connect(mapState, actions)(App);