import React, { Component, Fragment } from 'react';
import { Text } from './styled';
import MainView from './mainView';
import LoadingComponent from '../../layout/loader/LoadingComponent';

import api from '../../utils/api';

class Main extends Component {

  state = {
    rooms: [],
    isLoading: true,
    isError: false,
    tickets: []
  };
  
  loadData = () => {
    api.getHalls()
      .then(result => {
        this.setState({
          rooms: result.halls,
          isLoading: false
        });
      })
  }

  componentDidMount() {
    this.loadData();
  };

  render() {
    const { user } = this.props; 
    const { isError, rooms, isLoading } = this.state;

    if (isLoading) return <LoadingComponent />
    return (
      <Fragment>
        {user && !isError && 
          <MainView rooms={rooms}/>} 
          {isError && (<Text>Error!!!</Text>)}
      </Fragment> 
    );
  }
};

export default Main;