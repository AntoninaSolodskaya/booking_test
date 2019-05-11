import React, { Component } from 'react';
import { Title, Container, ButtonWrap, Button, Wrap, Time, Block } from './styled';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const DraggableCalendar = withDragAndDrop(BigCalendar);
const localizer = BigCalendar.momentLocalizer(moment);

class CardPageView extends Component {
  render() {
    const { 
      tickets,
      user,
      deleteTicket,
      handleCreateTicket,
      onEventResize,
      closeCalendar
    } = this.props; 
    console.log("CardPageView", tickets);
    return (
      <Container>
        <Title>Choose Your Date</Title>     
        <DraggableCalendar
          // eventPropGetter={(this.eventStyleGetter)}
          localizer={localizer}
          events={tickets}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          onEventResize={ticket => onEventResize(ticket)}
          onEventDrop={event => handleCreateTicket(event)}
          //onSelecting={event => this.handleCreateTicket(event)}
          onSelectSlot={(ticket) => handleCreateTicket(ticket)}
          // onSelectEvent={(event) => console.log(event.title)}
          // resizable
          selectable
        />
        <ButtonWrap>
          <Button onClick={closeCalendar}>Back</Button>
          <Wrap>
            {tickets 
              && tickets.filter(tick => tick.user_id === user._id).map((ticket, id) => (
                <Block key={id} >
                  <Time>
                    {moment(ticket.from).format("DD/MM/YY hh:mm")} - 
                    {moment(ticket.to).format("DD/MM/YY hh:mm")}
                  </Time>
                  <Button onClick={() => deleteTicket(ticket._id)}>Delete</Button> 
                </Block> 
            ))}
          </Wrap>
        </ButtonWrap>
      </Container>
    );
  }
};

export default CardPageView;