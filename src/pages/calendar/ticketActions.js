import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './ticketConstants';

export const createEvent = (ticket) => {
  return {
    type: CREATE_TICKET,
    payload: {
      ticket
    }
  }
}

export const updateEvent = (ticket) => {
  return {
    type: UPDATE_TICKET,
    payload: {
      ticket
    }
  }
}

export const deleteEvent = (ticketId) => {
  return {
    type: DELETE_TICKET,
    payload: {
      ticketId
    }
  }
}