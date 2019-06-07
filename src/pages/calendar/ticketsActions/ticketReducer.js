import { createReducer } from '../../../utils/reducerUtil';
import { LOAD_TICKETS, CREATE_TICKET, UPDATE_TICKET, DELETE_TICKET } from './ticketConstants';

const initialState = []
  
export const loadTickets = (state, payload) => {
  return payload.tickets
};

export const createTicket = (state, payload) => {
  return [
    ...state.filter(ticket => ticket._id !== payload.ticket),
    Object.assign({}, payload.ticket)
  ]
};

export const updateTicket = (state, payload) => {
  return [
    ...state.filter(ticket => ticket._id !== payload.ticket._id),
    payload.ticket
  ]
};

export const deleteTicket = (state, payload) => {
  return [
    ...state.filter(ticket => ticket._id !== payload.ticketId)
  ]
};

export default createReducer(initialState, {
  [LOAD_TICKETS]: loadTickets,
  [CREATE_TICKET]: createTicket,
  [UPDATE_TICKET]: updateTicket,
  [DELETE_TICKET]: deleteTicket
});
