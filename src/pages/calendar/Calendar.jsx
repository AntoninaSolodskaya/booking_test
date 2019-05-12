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


//  eventStyleGetter = (event, start, end, isSelected) => {
//     let style = {
//       backgroundColor: `${event.color}`,
//       borderRadius: '0px',
//       opacity: 0.8,
//       color: '#ffffff',
//       border: '0px',
//       display: 'block',
//       padding: '17px 5px'
//     };
//     return {
//       style: style
//     };
//   };
  closeCalendar = () => {
    this.props.history.goBack()
  };
  
  isCanEdit = (ticket) => {
    if (ticket.event.user_id !== this.props.user._id) {
      console.log("Not this user");
      return false;
    }
    return true;
  };

  onEventResize = (ticket) => {
    if (!this.isCanEdit(ticket)) {
      return;
    }
  }

  // onEventDrop = (newTicket, start, end) => {
  //   console.log(newTicket, this.props.user);
  //   if (!this.isCanEdit(newTicket)) {
  //     return;
  //   }
  //   const { tickets } = this.state;
  //   const idx = tickets.indexOf(newTicket);
  //   const updatedTicket = { ...newTicket, start, end };
  //   const nextTicket = [...tickets];
  //   nextTicket.splice(idx, 1, updatedTicket);
  //   this.setState({
  //     tickets: nextTicket, 
  //   });
   
  //   // this.loadNewTicket();
  // };

  formatTicketDate = (ticket) => {
    const editedTicket = ticket;

    editedTicket.start = moment(ticket.from).toDate();
    editedTicket.end = moment(ticket.to).toDate();
    console.log(editedTicket);
    return editedTicket;
  };

  handleCreateTicket = (ticket) => {
    const {user} = this.props;
    const hallId = this.props.match.params.id;
    
    let newTicket = {
      hall_id: hallId,
      title: ticket.title || "room is ordered",
      // from: moment(ticket.start).unix(),
      // to: moment(ticket.end).subtract(1, 'seconds').unix(),
      from: new Date(ticket.start).getTime(),
      to: new Date(ticket.end).getTime(),
      user_id: user._id
    }

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
  }
  
  deleteTicket = (ticketId) => {
    api.deleteTicket(ticketId)
      .then(() => {
        this.setState({
            tickets: this.state.tickets.filter(ticket => ticket._id !== ticketId)
          });
      })
  }

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
      /> 
    );
  }
};

export default CardPage;