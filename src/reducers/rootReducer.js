import { combineReducers } from 'redux';
import testReducer from '../test/testReducer';
import ticketReducer from '../pages/calendar/ticketReducer';
import modalsReducer from '../auth/modalsReducer';

const rootReducer = combineReducers({
  test: testReducer,
  ticket: ticketReducer,
  modals: modalsReducer
});

export default rootReducer;
