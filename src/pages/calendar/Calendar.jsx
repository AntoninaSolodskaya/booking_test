import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CalendarView from './CalendarView';
import moment from 'moment';
import swal from 'sweetalert';
import { deleteTicket, createTicket, updateTicket, loadAllTickets } from '../calendar/ticketsActions/ticketActions';

import api from '../../utils/api';

  const mapState = (state, ownProps) => {

    const ticketId = ownProps.match.params.id;
    
    let ticket = {}

    if (ticketId && state.tickets.length > 0) {
      ticket = state.tickets.filter(ticket => ticket.hall_id === ticketId)
    }
    return {
      ticket
    } 
  };

  const actions = {
    deleteTicket,
    createTicket, 
    updateTicket,
    loadAllTickets
  };

class Calendar extends Component {

  state = {
    isError: false, 
    event: []
  };
  
  closeCalendar = () => {
    this.props.history.goBack()
  };
  
  isCanEdit = (event) => {
    const user = localStorage.getItem('userId');
    if (event.user_id !== user) {
      swal({
        title: "Not you order!",
        icon: "warning"
      });
      return false;
    }
    return true;
  };

  formatTicketDate = (ticket) => {
    const editedTicket = ticket;

    editedTicket.start = moment(ticket.from).toDate();
    editedTicket.end = moment(ticket.to).toDate();

    return editedTicket;  
  };

  isOldDate = (startDate) => {
    const date = new Date();
    if(startDate < date) {
      swal({
        title: "Old Date!",
        icon: "warning"
      });
      return true; 
    }
    return false;
  };
   
  handleCreateTicket = (ticket) => {
   
    if(this.isOldDate(ticket.start)) {
      return;
    };

    swal("Write something here:", {
      content: "input",
    })
    .then((value) => {
      swal(`You typed: ${value}`);

    const user = localStorage.getItem('userId');
    const hallId = this.props.match.params.id;
   
    let newTicket = {
      hall_id: hallId,
      title: value,
      from: new Date(ticket.start).getTime(),
      to: new Date(ticket.end).getTime(),
      user_id: user
    };
    this.props.createTicket(newTicket)
      console.log(this.state.event)
    });
  };

  resizeTicket = ({ event, start, end }) => {
    if(this.isOldDate(start)) {
      return;
    };

    if (!this.isCanEdit(event)) {
      return 
    };

    const nextTickets = this.props.ticket.map(existingTicket => {
      return existingTicket._id === event._id
        ? { ...existingTicket, start, end }
        : existingTicket
    });

    const orderTicket = {
      from: new Date(event.start).getTime(),
      to: new Date(event.end).getTime(),
      title: event.title || "room is ordered"
    };

    this.props.updateTicket(orderTicket)
    // api.changeTicket(event._id, orderTicket)
    this.setState({
      event: nextTickets
    })
   
    console.log(this.state.event)
  };

  deleteTicket = (ticketId) => {
    return this.props.deleteTicket(ticketId);
  };

  componentDidMount() {
    this.props.loadAllTickets()
  }

  render() {
    const { isError } = this.state;
    const { ticket } = this.props;
    const fetchTickets = ticket && ticket.map(ticket => this.formatTicketDate(ticket));
    return (
      <Fragment>
        <CalendarView 
          ticket={ticket} 
          fetchTickets={fetchTickets}
          deleteTicket={this.deleteTicket} 
          handleCreateTicket={this.handleCreateTicket}
          onEventResize={this.onEventResize}
          closeCalendar={this.closeCalendar}
          isError={isError}
          resizeTicket={this.resizeTicket}
        /> 
      </Fragment>
    );
  }
};

export default connect(mapState, actions)(Calendar);