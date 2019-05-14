import React, { Component } from 'react';
import CalendarView from './CalendarView';
import moment from 'moment';

import api from '../../utils/api';

class CardPage extends Component {

  state = {
    tickets: [],
    isLoading: true,
    isError: false,
  };

  closeCalendar = () => {
    this.props.history.goBack()
  };
  
  isCanEdit = (event) => {
    if (event.user_id !== this.props.user._id) {
      console.log("Not this user");
      return false;
    }
    return true;
  };

  resizeEvent = ({ event, start, end }) => {

    if (!this.isCanEdit(event)) {
      return;
    }

    const { tickets } = this.state

    const nextEvents = tickets.map(existingEvent => {
      return existingEvent._id === event._id
        ? { ...existingEvent, start, end }
        : existingEvent
    });

    const orderTicket = {
      from: new Date(event.start).getTime(),
      to: new Date(event.end).getTime(),
      title: "room is ordered"
    };

    api.changeTicket(event._id, orderTicket)
    this.setState({
      tickets: nextEvents,
    })
  };


  formatTicketDate = (ticket) => {
    const editedTicket = ticket;

    editedTicket.start = moment(ticket.from).toDate();
    editedTicket.end = moment(ticket.to).toDate();
    return editedTicket;
  };

  handleCreateTicket = (ticket) => {
    const {user} = this.props;
    const hallId = this.props.match.params.id;
    
    let newTicket = {
      hall_id: hallId,
      title: ticket.title || "room is ordered",
      // from: moment(ticket.start).unix(),
      // to: moment(ticket.end).subtract(-1, 'seconds').unix(),
      from: new Date(ticket.start).getTime(),
      to: new Date(ticket.end).getTime(),
      user_id: user._id
    };

    api.addTicket(newTicket)
      .then(response => {
        this.setState({ tickets: [...this.state.tickets, this.formatTicketDate(response)] });
      })
  };

  loadData = () => {
    api.getTickets()
      .then(result => {
        console.log(result);
        this.setState({
          tickets: result
            .filter(ticket => ticket.hall_id === this.props.match.params.id)
            .map(event => this.formatTicketDate(event)),
          isLoading: true
        });
      })
  };;

  deleteTicket = (ticketId) => {
    api.deleteTicket(ticketId)
      .then(() => {
        this.setState({
            tickets: this.state.tickets.filter(ticket => ticket._id !== ticketId)
          });
      })
      console.log(ticketId)
  };

  componentDidMount() {
    this.loadData();
    this.setState({ isLoading: false })
  };
  
  render() {
    const { tickets, isError } = this.state;
    const { user } = this.props;
    return (
      <CalendarView 
        tickets={tickets} 
        user={user}  
        deleteTicket={this.deleteTicket} 
        handleCreateTicket={this.handleCreateTicket}
        onEventResize={this.onEventResize}
        closeCalendar={this.closeCalendar}
        isError={isError}
        resizeEvent={this.resizeEvent}
      /> 
    );
  }
};

export default CardPage;