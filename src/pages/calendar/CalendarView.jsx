import React, { Component, Fragment } from 'react';
import { Title, Container, ButtonWrap, Button, Icon, Wrap, Time, Block, Text } from './styled';
import { Delete } from '../../icons';
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
      closeCalendar,
      resizeTicket,
      isError
    } = this.props; 

    return (
      <Fragment>
        {!isError &&
        <Container>
          <Title>Choose Your Date</Title>     
          <DraggableCalendar
            localizer={localizer}
            events={tickets}
            defaultView="month"
            titleAccessor="title"
            defaultDate={new Date()}
            onEventResize={event => resizeTicket(event)}
            onEventDrop={event => resizeTicket(event)}
            onSelectSlot={(ticket) => handleCreateTicket(ticket)}
            resizable
            selectable
            popup
          />
          <ButtonWrap>
            <Button onClick={closeCalendar}>Back</Button>
            <Wrap>
              {tickets 
                && tickets.filter(tick => tick.user_id === user._id).map((ticket, id) => (
                  <Block key={id} >
                    <Time>
                      {moment(ticket.start).format("DD/MM/YY hh:mm:ss")} - 
                      {moment(ticket.end).format("DD/MM/YY hh:mm:ss")}
                    </Time>
                    <Icon onClick={() => deleteTicket(ticket._id)}>{Delete}</Icon> 
                  </Block> 
              ))}
            </Wrap>
          </ButtonWrap>
        </Container>}
      {isError && (<Text>Error!!!</Text>)}
      </Fragment>
    );
  }
};

export default CardPageView;