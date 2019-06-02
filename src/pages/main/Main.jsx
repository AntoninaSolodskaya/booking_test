import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, Block } from './styled';
import MainView from './mainView';
import LoadingComponent from '../../loader/LoadingComponent';
import SelectHalls from './SelectHalls';

const mapState = state => ({
  halls: state.halls,
  loading: state.async.loading
});

class Main extends Component {
  state = {
    isError: false,
    selectedOption: null,
    clearable: true
  };                                           

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  
  render() {
    const { isError, selectedOption, clearable } = this.state;
    const { halls, loading } = this.props;
    if (loading) return <LoadingComponent />
  
    return (
      <Fragment>
        {!isError &&   
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

export default connect(mapState)(Main);