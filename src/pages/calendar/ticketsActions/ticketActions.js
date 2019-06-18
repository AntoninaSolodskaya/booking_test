import { LOAD_TICKETS, CREATE_TICKET, UPDATE_TICKET, DELETE_TICKET } from './ticketConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import instance from '../../../utils/api';
import swal from 'sweetalert';

export const fetchTickets = tickets => {
  return {
    type: LOAD_TICKETS,
    payload: {
      tickets
    }
  }
};

export const postTicket = ticket => {
  return {
    type: CREATE_TICKET,
    payload: {
      ticket
    }
  }
};

export const updatedTicket = ticket => {
  return {
    type: UPDATE_TICKET,
    payload: {
      ticket
    }
  }
};


export const deletedTicket = ticketId => {
  return {
    type: DELETE_TICKET,
    payload: {
      ticketId
    }
  }
};

export const createTicket = ticket => {
  return (dispatch) => {
    instance.post(`/tickets`, ticket )
      .then((newTicket) => {
        dispatch(postTicket(newTicket))
      })
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
  }
};

export const updateTicket = (ticketId, ticket) => {
  return (dispatch) => {
    instance.put(`/ticket/${ticketId}`, ticket)
      .then((orderTicket) => {
        dispatch(updatedTicket(orderTicket[0]))
    })
  }
};

export const deleteTicket = ticketId => {
  return (dispatch) => {
    instance.delete(`/tickets/${ticketId}`)
      .then(() => {
        dispatch(deletedTicket(ticketId))
      });
  }
};

export const loadAllTickets = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      await instance.get(`/tickets`)
        .then(tickets => {
          dispatch(fetchTickets(tickets))
        })
      dispatch(asyncActionFinish())
    } catch (error) {
      dispatch(asyncActionError());
    }
  }
};