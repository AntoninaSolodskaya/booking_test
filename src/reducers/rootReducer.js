import { combineReducers } from 'redux';
import testReducer from '../test/testReducer';
import ticketReducer from '../pages/calendar/ticketsActions/ticketReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../auth/authActions/authReducer';
import asyncReducer from '../async/asyncReducer';
import hallsReducer from '../pages/main/hallsAction/hallsReducers';

const rootReducer = combineReducers({
  test: testReducer,
  tickets: ticketReducer,
  form: formReducer,
  auth: authReducer,
  async: asyncReducer,
  halls: hallsReducer
});

export default rootReducer;
