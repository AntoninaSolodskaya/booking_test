import React, { Component, Fragment } from 'react';
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const DraggableCalendar = withDragAndDrop(BigCalendar);
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  state = {
    tickets: []
  };

  // eventStyleGetter = (event, start, end, isSelected) => {
  //   let style = {
  //     backgroundColor: `${event.color}`,
  //     borderRadius: '0px',
  //     opacity: 0.8,
  //     color: '#ffffff',
  //     border: '0px',
  //     display: 'block',
  //     padding: '17px 5px'
  //   };
  //   return {
  //     style: style
  //   };
  // };

  onEventResize = (ticket, from, to ) => {
    const { tickets } = this.state;
    const nextTicket = tickets.map(existingTicket => {
      return existingTicket.id === ticket.id
        ? { ...existingTicket, from, to  }
        : existingTicket
    })

    this.setState({
      events:  nextTicket,
    })
    localStorage.setItem('days', JSON.stringify(nextTicket));
    console.log(nextTicket);
  }

  onEventDrop = (newTicket, from, to) => {
    const { tickets } = this.state;
    const idx = tickets.indexOf(newTicket);
    const updatedTicket = { ...newTicket, from, to };
    const nextTicket = [...tickets];
    nextTicket.splice(idx, 1, updatedTicket);
    this.setState({
      tickets: nextTicket, 
    })
    
    localStorage.setItem('weeks', JSON.stringify(newTicket));
    console.log(`${newTicket.from} to ${newTicket.to}`);
  };

  handleCreateTicket = (ticket) => {
    const updatedTicket = [ticket];
    this.setState({
      tickets: updatedTicket,
    });
    localStorage.setItem('ticket', JSON.stringify(ticket));
    console.log(`${ticket.id}`);
  };


  render() {
    const { tickets } = this.state;
    return (
      <Fragment>
        <DraggableCalendar
          eventPropGetter={(this.eventStyleGetter)}
          localizer={localizer}
          events={tickets}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="from"
          endAccessor="to"
          titleAccessor="title"
          onEventResize={this.onEventResize}
          onEventDrop={this.onEventDrop}
          onSelecting={event => this.handleCreateTicket(event)}
          onSelectSlot={(ticket) => ticket.resourceId }
          resizable
          selectable
        />
      </Fragment>  
    );
  }
};

export default Calendar;