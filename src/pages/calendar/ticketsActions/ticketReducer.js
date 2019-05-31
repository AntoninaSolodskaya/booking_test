import { createReducer } from '../../../utils/reducerUtil';
import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET, LOAD_TICKETS } from './ticketConstants';

const initialState = [];

export const loadTickets = (state, payload) => {
  return payload.tickets
};

// export const createTicket = (state, payload) => {
//   return [...state, Object.assign({}, payload.ticket)]
// };

// export const updateTicket = (state, payload) => {
//   return [
//     ...state.filter(ticket => ticket._id !== payload.ticket._id),
//     Object.assign({}, payload.ticket)
//   ]
// };

// export const deleteTicket = (state, payload) => {
//   return [
//     ...state.filter(ticket => ticket._id !== payload.ticketId)
//   ]
// };


export default createReducer(initialState, {
  // [CREATE_TICKET]: createTicket,
  // [UPDATE_TICKET]: updateTicket,
  // [DELETE_TICKET]: deleteTicket,
  [LOAD_TICKETS]: loadTickets
});
