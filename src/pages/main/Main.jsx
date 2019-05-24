import React, { Component, Fragment } from 'react';
import { Text } from './styled';
import MainView from './mainView';
import LoadingComponent from '../../loader/LoadingComponent';
import Select from 'react-select';

import api from '../../utils/api';

const options = [
  { value: 'Hall-1', label: 'Hall-1' },
  { value: 'Hall-2', label: 'Hall-2' },
  { value: 'Hall-3', label: 'Hall-3' },
  { value: 'Hall-4', label: 'Hall-4' }
];


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
    this.setState({ isLoading: false})
  };

  render() {
    const { user } = this.props; 
    const { isError, rooms, isLoading } = this.state;

    if (isLoading) return <LoadingComponent />
  
    return (
      <Fragment>
        {user && !isError &&  
        <div>
          <Select options={options} />
          <MainView rooms={rooms} />
        </div>}
        {isError && (<Text>Error!!!</Text>)}
      </Fragment> 
    );
  }
};

export default Main;