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

class App extends Component {

  state = {
    user: {},
    rooms: [],
    isLoading: false
  };


  loadData = () => {
    fetch('http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/halls', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          rooms: result.halls,
          isLoading: true
        });
      })
      .catch(reason => console.error(reason))  
  }

  componentDidMount() {
    this.loadData();
    this.setState({ 
      user: JSON.parse(localStorage.getItem('user')),  
    });
  };

  componentWillUnmount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const {user, rooms} = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar user={user} />
          <Container className="main">
            <Switch>
              <Route 
                exact path="/" 
                component={() => <Main user={user} rooms={rooms} />}
              />
              <Route exact path="/login" component={LoginModal} />
              <Route exact path="/register" component={RegisterModal} />
             
              <Route
                path='/card/:id'
                render={(props) => <CardPage {...props} user={user} room={rooms} />}
              />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default App;