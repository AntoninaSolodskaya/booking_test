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


  render() {
    return (
      <DraggableCalendar
        localizer={localizer}
        events={data}
        draggableAccessor={event => true}
        eventPropGetter={(this.eventStyleGetter)}
      />
    );
  }
};

export default Calendar;