import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CalendarView from './CalendarView';
import moment from 'moment';
import swal from 'sweetalert';

import api from '../../utils/api';

  const mapState = (state, ownProps) => {

    const ticketId = ownProps.match.params.id;

    let ticket = {}

    if (ticketId && state.tickets.length > 0) {
      ticket = state.tickets
        .filter(ticket => ticket.hall_id === ticketId) 
      console.log(ticket)
    }
    return {
      ticket  
    } 
  };


class Calendar extends Component {

  state = {
    isError: false
  };
  
  closeCalendar = () => {
    this.props.history.goBack()
  };
  
  isCanEdit = (event) => {
    if (event.user_id !== this.props.user._id) {
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

    const {user} = this.props;
    const hallId = this.props.match.params.id;
   
    let newTicket = {
      hall_id: hallId,
      title: value,
      from: new Date(ticket.start).getTime(),
      to: new Date(ticket.end).getTime(),
      user_id: user._id
    };

    api.addTicket(newTicket)
      .then(response => {
        this.setState({ tickets: [...this.state.tickets, this.formatTicketDate(response)] })
      })
      .catch(error => {
        if (error.status === 400) {
          swal({
            title: "Not you order!",
            icon: "warning"
          });
          return false;
        }
        return true;  
      })  
      console.log(value)
    });
  };

  resizeTicket = ({ event, start, end }) => {
    if(this.isOldDate(start)) {
      return;
    };

    if (!this.isCanEdit(event)) {
      return 
    };

    const nextTickets = this.state.tickets.map(existingTicket => {
      return existingTicket._id === event._id
        ? { ...existingTicket, start, end }
        : existingTicket
    });

    const orderTicket = {
      from: new Date(event.start).getTime(),
      to: new Date(event.end).getTime(),
      title: event.title || "room is ordered"
    };

    api.changeTicket(event._id, orderTicket)
    this.setState({
      tickets: nextTickets,
    });
  };

  deleteTicket = (ticketId) => {
    api.deleteTicket(ticketId)
      .then(() => {
        this.setState({
            tickets: this.state.tickets.filter(ticket => ticket._id !== ticketId)
          });
      })
      console.log(ticketId)
  };

  
  render() {
    const { isError } = this.state;
    const { user, ticket } = this.props;
    const fetchTickets = ticket.map(event => this.formatTicketDate(event));
    return (
      <Fragment>
        <CalendarView 
          ticket={ticket} 
          fetchTickets={fetchTickets}
          user={user}  
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

export default connect(mapState)(Calendar);