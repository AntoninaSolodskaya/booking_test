import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Text, Block } from './styled';
import MainView from './mainView';
import LoadingComponent from '../../loader/LoadingComponent';
import SelectHalls from './SelectHalls';
import { loadAllHalls } from './hallsAction/hallsActions';
import { loadAllTickets } from '../calendar/ticketsActions/ticketActions';
import axios from 'axios';

const mapState = state => ({
  auth: state.auth,
  halls: state.halls,
  tickets: state.tickets,
  loading: state.async.loading
});

const actions = {
  loadAllHalls,
  loadAllTickets
};

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
  
  componentDidMount() {
    const user = localStorage.getItem('user');

    if (user) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      this.props.loadAllHalls();
      this.props.loadAllTickets();
    } 
  };

  render() {
    const { isError, selectedOption, clearable } = this.state;
    const { halls, loading } = this.props;
  
    if (loading) {
      return <LoadingComponent /> 
      } else {
  
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
  }
};

export default withRouter(connect(mapState, actions)(Main));