import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BigCalendar from 'react-big-calendar';
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
  justify-content: space-between;
  align-items: center;
  min-width: 270px;
  margin: 20px;
`;

const Button = styled.button`
  justify-content: center;
  display: flex
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 100px;
  font-size: 20px;
`;

const Text = styled.p`
  color: #000000;
  font-size: 20px;
  text-align: center;
`;

class CardPage extends Component {

  state = {
    tickets: [],
    isLoading: false,
    isError: false,
  };

  closeCard = () => {
    this.props.history.goBack()
  };
  
  isCanEdit = (ticket) => {
    if (ticket.event.user_id !== this.props.user._id) {
      console.log("Not this user");
      return false;
    }
    return true;
  };

  onEventResize = (ticket, start, end) => {
    if (!this.isCanEdit(ticket)) {
      return;
    }
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
    localStorage.getItem('days', JSON.stringify(nextTicket));
    console.log(nextTicket);
    // this.loadNewTicket();
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
   
  //   localStorage.setItem('weeks', JSON.stringify(newTicket));
  //   localStorage.getItem('weeks', JSON.stringify(newTicket));
  //   console.log(`${newTicket.start} to ${newTicket.end}`);
  //   // this.loadNewTicket();
  // };

  handleCreateTicket = (ticket) => {
    const {user} = this.props;
    const ticketId = this.props.match.params.id;
    
    ticket.hall_id = ticketId;
    ticket.user_id = user._id;
    
    const newTicket = {
      ...ticket,
      hall_id: ticketId,
      user_id: user._id,
      title: `${ticket.title}` && "room is ordered",
    }
    const updatedTicket = [newTicket];
    this.setState({
      tickets: updatedTicket,
    });
    localStorage.setItem('ticket', JSON.stringify(newTicket));
    localStorage.getItem('ticket', JSON.stringify(newTicket));
    console.log(newTicket);

    let loadTickets = {
      hall_id: ticketId,
      title: `${ticket.title}` && "room is ordered",
      from: new Date(ticket.start).getTime(),
      to: new Date(ticket.end).getTime(),
      user_id: user._id
    }

    let token = localStorage.getItem('token');

    axios
    .post(`http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/tickets`,{...loadTickets}, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then(response =>{
      console.log(response);
      console.log(token)
    }).catch(err =>{
      console.log(err);
    })
    console.log(this.props.user.token)
  };


  loadData = () => {
    axios
      .get('http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/tickets')
      .then(response => response.data)
      .then(result => {
        console.log(result);
        this.setState({
          tickets: result
            .filter(ticket => ticket.hall_id === this.props.match.params.id)
            .map(event => {
              let editedEvent = event;
              editedEvent.start = moment(event.from).toDate();
              editedEvent.end = moment(event.to).toDate();
              console.log(editedEvent);
              return editedEvent;
            }),
          isLoading: true
        });
      })
      .catch(reason => console.error(reason));
  }
  
  deleteTicket = (ticket) => {

    let token = localStorage.getItem('token');
    // let ticket = localStorage.getItem('ticket');
    // console.log(ticket)
    
    // axios
    // .delete(` http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/:id` , { id: `${ticket.id}`}, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": token
    //   }
    // }).then(response =>{
    //   console.log(response);
    // }).catch(err =>{
    //   console.log(err);
    // })
  }

  componentDidMount() {
    this.loadData();
    if (localStorage.getItem('ticket') && localStorage.getItem('weeks') && localStorage.getItem('days')) {
      this.setState({ 
        tickets: JSON.parse(localStorage.getItem('ticket') && localStorage.getItem('weeks') && localStorage.getItem('days')),  
      });
    }  
  };


  render() {
    const { tickets, isError } = this.state; 
    return (
      <Container>
        {!isError &&  
          <Fragment>
            <Title>Choose Your Date</Title>
            <DraggableCalendar
              eventPropGetter={(this.eventStyleGetter)}
              localizer={localizer}
              events={tickets}
              defaultDate={new Date()}
              defaultView="month"
              startAccessor="start"
              endAccessor="end"
              titleAccessor="title"
              // onEventResize={this.deleteTicket}
              onEventDrop={event => this.deleteTicket(event)}
              onSelecting={event => this.handleCreateTicket(event)}
              onSelectSlot={(ticket) => ticket.resourceId }
              onSelectEvent={(event) => console.log(event.title)}
              selectable
              components={{
                event: this.customElement,
              }}
            />
            <ButtonWrap>
              <Button onClick={this.closeCard}>Back</Button>
              {/* <Button onClick={this.deleteTicket}>Delete</Button> */}
            </ButtonWrap>
          </Fragment>}
        {isError && (<Text>Error!!!</Text>)}
     </Container>
    );
  }
};

export default CardPage;