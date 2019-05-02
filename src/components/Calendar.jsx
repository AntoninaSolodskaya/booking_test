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
  render() {
    return (
      <DraggableCalendar
        localizer={localizer}
        events={data}
        draggableAccessor={event => true}
      />
    );
  }
};

export default Calendar;