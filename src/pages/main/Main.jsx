import React, { Component, Fragment } from 'react';
import { Text, Block } from './styled';
import MainView from './mainView';
import LoadingComponent from '../../loader/LoadingComponent';
import SelectHalls from './SelectHalls';

import api from '../../utils/api';

class Main extends Component {
  state = {
    isLoading: true,
    isError: false,
    selectedOption: null,
    clearable: true,
    halls: []
  };                                           
  
  loadData = () => {
    api.getHalls()
      .then(result => {
        this.setState({
          halls: result.halls,
          isLoading: false
        });
      })
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    localStorage.setItem('options', JSON.stringify(selectedOption))
  };

  componentDidMount() {
    this.loadData();
    this.setState({ isLoading: false });
  };

  render() {
    const { user } = this.props; 
    const { isError, isLoading, halls, selectedOption, clearable } = this.state;
    if (isLoading) return <LoadingComponent />
  
    return (
      <Fragment>
        {user && !isError &&  
        <Block>
          <SelectHalls 
            halls={halls} 
            selectedOption={selectedOption} 
            clearable={clearable} 
            handleChange={this.handleChange}
          />
          <MainView selectedOption={selectedOption} /> 
        </Block>}
        {isError && (<Text>Error!!!</Text>)}
      </Fragment> 
    );
  }
};

export default Main;