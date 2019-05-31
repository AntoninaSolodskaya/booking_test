import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET, LOAD_TICKETS } from './ticketConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import api from '../../../utils/api';

export const fetchTickets = tickets => {
  return {
    type: LOAD_TICKETS,
    payload: tickets
  }
};

// export const createTicket = (ticket) => {
//   return {
//     type: CREATE_TICKET,
//     payload: {
//       ticket
//     }
//   }
// };

// export const updateTicket = (ticket) => {
//   return {
//     type: UPDATE_TICKET,
//     payload: {
//       ticket
//     }
//   }
// };

// export const deleteTicket = (ticketId) => {
//   return {
//     type: DELETE_TICKET,
//     payload: {
//       ticketId
//     }
//   }
// };

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