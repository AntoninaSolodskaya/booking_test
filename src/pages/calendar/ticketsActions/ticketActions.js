import { LOAD_TICKETS, CREATE_TICKET, UPDATE_TICKET, DELETE_TICKET } from './ticketConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import api from '../../../utils/api';
import swal from 'sweetalert';

export const fetchTickets = tickets => {
  return {
    type: LOAD_TICKETS,
    payload: { 
      tickets 
    }
  }
};

export const postTicket = (ticket) => {
  return {
    type: CREATE_TICKET,
    payload: {
      ticket
    }
  }
};

export const updatedTicket = (event) => {
  return {
    type: UPDATE_TICKET,
    payload: {
      event
    }
  }
};

export const deletedTicket = (ticketId) => {
  return {
    type: DELETE_TICKET,
    payload: {
      ticketId
    }
  }
};


export const createTicket = (ticket) => {
  return (dispatch) => {
    api.addTicket(ticket)

    .catch(error => {
      if (error.status === 400) {
        swal({
          title: "Not you order!",
          icon: "warning"
        });
        return false;
      }
      return true;  
    });  
    dispatch(postTicket(ticket))
  }
};

export const updateTicket = (event, orderTicket) => {
  return (dispatch) => {
    api.changeTicket(event._id, orderTicket)
    dispatch(updatedTicket(event))
  }
};

export const deleteTicket = (ticketId) => {
  return (dispatch) => {
    api.deleteTicket(ticketId)
      
    dispatch(deletedTicket(ticketId))
  }
}


export const loadAllTickets = () => {

  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let tickets = await api.getTickets()
           
      dispatch(fetchTickets(tickets))
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
};