import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import data from '../data';

const DraggableCalendar = withDragAndDrop(BigCalendar);
const localizer = BigCalendar.momentLocalizer(moment);



class Calendar extends Component {
  state = {
    events: [
      {
        'id': '1',
        'title': 'Room 1',
        'allDay': true,
        'start': new Date(2019, 5, 0),
        'end': new Date(2019, 5, 1),
        'color': "#FF0000"
      },
      {
        'id': '1',
        'title': 'Room 1',
        'allDay': true,
        'start': new Date(2019, 5, 2),
        'end': new Date(2019, 5, 3),
        'color': "#FF0000"
      },
      {
          'id': '1',
          'title': 'Room 1',
          'start': new Date(2019, 5, 7),
          'end': new Date(2019, 5, 10),
          'color': "#FF0000"
        },
        {
          'id': '1',
          'title': 'Room 1',
          'start': new Date(2019, 5, 9),
          'end': new Date(2019, 5, 12),
          'color': "#FF0000"
        },
      // {
      //   'id': '2',
      //   'title': 'Room 2',
      //   'start': new Date(2019, 5, 7),
      //   'end': new Date(2019, 5, 10),
      //   'color': "#00FF7F"
      // },
      // {
      //   'id': '2',
      //   'title': 'Room 2',
      //   'start': new Date(2019, 5, 9),
      //   'end': new Date(2019, 5, 12),
      //   'color': "#00FF7F"
      // },
      // {
      //   'id': '3',
      //   'title': 'Room 3',
      //   'start': new Date(2019, 5, 13, 0, 0, 0),
      //   'end': new Date(2019, 5, 20, 0, 0, 0),
      //   'color': "#4169E1"
      // },
      // {
      //   'id': '3',
      //   'title': 'Room 3',
      //   'start': new Date(2019, 5, 21, 0, 0, 0),
      //   'end': new Date(2019, 5, 22, 0, 0, 0),
      //   'color': "#4169E1"
      // },
      // {
      //   'id': '4',
      //   'title': 'Room 4',
      //   'color': "#FFD700",
      //   'end': new Date('2019-05-01T01:45:00.000Z'),  
      //   'start': new Date('2019-05-01T07:45:00.000Z'),
      // }
    ]
  };

  eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: `${event.color}`,
      borderRadius: '0px',
      opacity: 0.8,
      color: '#ffffff',
      border: '0px',
      display: 'block',
      padding: '17px 5px'
    };
    return {
      style: style
    };
  };

  onEventResize = (event, start, end) => {
    const { events } = this.state;
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
    // localStorage.setItem('days', JSON.stringify(nextEvents));
    console.log(nextEvents);
  }

 

  onEventDrop = (event, start, end) => {
    const { events } = this.state;
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

   
    // var startDate = moment(event.start.toLocaleString()).format("YYYY-MM-DDm:ss");
    // var endDate = moment(event.end.toLocaleString()).format("YYYY-MM-DDm:ss");
    // console.log(startDate); 
    // console.log(endDate); 
    
    this.setState({
      events: nextEvents,
    })
    localStorage.setItem('weeks', JSON.stringify(event));
    console.log(`${event.start} to ${event.end}`);
  }


  render() {
    const {events} = this.state;
    return (
        <DraggableCalendar
          eventPropGetter={(this.eventStyleGetter)}
          localizer={localizer}
          events={events}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          onEventResize={this.onEventResize}
          onEventDrop={this.onEventDrop}
          resizable
          selectable
        />
    );
  }
};

export default Calendar;