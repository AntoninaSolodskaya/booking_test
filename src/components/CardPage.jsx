import React, { Component } from 'react';
import styled from 'styled-components';
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const DraggableCalendar = withDragAndDrop(BigCalendar);
const localizer = BigCalendar.momentLocalizer(moment);

const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: lightblue;
  font-size: 19px;
  line-height: 25px;
`;

const Container = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 100px;
  font-size: 20px;
`;

class CardPage extends Component {
  
  state = {
    tickets: [],
    isLoading: false
  };

  closeCard = () => {
    this.props.history.goBack()
  };

  onEventResize = (ticket, start, end) => {
    const { tickets } = this.state;
    const nextTicket = tickets.map(existingTicket => {
      return existingTicket._id === ticket._id
        ? { ...existingTicket, start, end }
        : existingTicket
    })

    this.setState({
      events: nextTicket,
    })
    localStorage.setItem('days', JSON.stringify(nextTicket));
    console.log(nextTicket);
  }

  onEventDrop = (newTicket, start, end) => {
    const { tickets } = this.state;
    const idx = tickets.indexOf(newTicket);
    const updatedTicket = { ...newTicket, start, end };
    const nextTicket = [...tickets];
    nextTicket.splice(idx, 1, updatedTicket);
    this.setState({
      tickets: nextTicket, 
    });
   
    localStorage.setItem('weeks', JSON.stringify(newTicket));
    console.log(`${newTicket.start} to ${newTicket.end}`);
  };

  handleCreateTicket = (ticket, start, end) => {
    const {user} = this.props;
    const ticketId = this.props.match.params.id;
    ticket.hall_id = ticketId;
    ticket.user_id = user._id;
    const newTicket = {
      ...ticket,
      hall_id: ticketId,
      user_id: user._id,
      title: `${ticket.title}` && "room is ordered",
      // from: ticket.start,
      // to: ticket.end
    }
    const updatedTicket = [newTicket];
    this.setState({
      tickets: updatedTicket,
    });
    localStorage.setItem('ticket', JSON.stringify(ticket));
    localStorage.getItem('ticket');
    console.log(newTicket);
  };

  loadData = () => {
    fetch(' http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/tickets ', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          tickets: result,
          isLoading: true
        });
      })
      .catch(reason => console.error(reason))  
  }

  componentDidMount() {
    this.loadData();
  };
    
  render() {
    const { tickets } = this.state;
    
    return (
      <Container>  
        <DraggableCalendar
          eventPropGetter={(this.eventStyleGetter)}
          localizer={localizer}
          events={tickets}
          defaultDate={new Date()}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          onEventResize={this.onEventResize}
          onEventDrop={this.onEventDrop}
          onSelecting={event => this.handleCreateTicket(event)}
          onSelectSlot={(ticket) => ticket.resourceId }
          onSelectEvent={(event) => event.title}
          selectable
          // components={{
          //   event: this.customElement,
          // }}
        />
        <ButtonWrap>
          <Button onClick={this.closeCard}>Back</Button>
        </ButtonWrap>
     </Container>
    )
  }
}

export default CardPage;