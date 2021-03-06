import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CalendarView from "./CalendarView";
import moment from "moment";
import swal from "sweetalert";
import {
  deleteTicket,
  createTicket,
  updateTicket
} from "../calendar/ticketsActions/ticketActions";

const mapState = (state, ownProps) => {
  const ticketId = ownProps.match.params.id;

  let ticket = {};

  if (ticketId && state.tickets.length > 0) {
    ticket = state.tickets.filter(ticket => ticket.hall_id === ticketId);
  }
  return {
    ticket
  };
};

const actions = {
  deleteTicket,
  createTicket,
  updateTicket
};

class Calendar extends Component {
  state = {
    isError: false
  };

  closeCalendar = () => {
    this.props.history.goBack();
  };

  isCanEdit = event => {
    const user = localStorage.getItem("userId");
    if (event.user_id !== user) {
      swal({
        title: "Not you order!",
        icon: "warning"
      });
      return false;
    }
    return true;
  };

  formatTicketDate = ticket => {
    const editedTicket = ticket;

    editedTicket.start = moment(ticket.from).toDate();
    editedTicket.end = moment(ticket.to).toDate();

    return editedTicket;
  };

  isOldDate = startDate => {
    const date = new Date();
    if (startDate < date) {
      swal({
        title: "Old Date!",
        icon: "warning"
      });
      return true;
    }
    return false;
  };

  handleCreateTicket = ticket => {
    if (this.isOldDate(ticket.start)) {
      return;
    }

    swal("Write something here:", {
      content: "input"
    }).then(value => {
      swal(`You typed: ${value}`);

      const user = localStorage.getItem("userId");
      const hallId = this.props.match.params.id;

      let newTicket = {
        hall_id: hallId,
        title: value,
        from: new Date(ticket.start).getTime(),
        to: new Date(ticket.end).getTime(),
        user_id: user
      };
      this.props.createTicket(newTicket);
    });
  };

  resizeTicket = ({ event, start, end }) => {
    if (this.isOldDate(start)) {
      return;
    }

    if (!this.isCanEdit(event)) {
      return;
    }

    const orderTicket = {
      from: new Date(start).getTime(),
      to: new Date(end).getTime(),
      title: event.title || "room is ordered"
    };
    return this.props.updateTicket(event._id, orderTicket);
  };

  deleteTicket = ticketId => {
    return this.props.deleteTicket(ticketId);
  };

  render() {
    const { isError } = this.state;
    const { ticket } = this.props;

    const fetchTickets =
      ticket && ticket.map(ticket => this.formatTicketDate(ticket));
    return (
      <Fragment>
        <CalendarView
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
}

export default connect(
  mapState,
  actions
)(Calendar);
