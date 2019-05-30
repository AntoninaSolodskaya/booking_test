import { combineReducers } from 'redux';
import testReducer from '../test/testReducer';
import ticketReducer from '../pages/calendar/ticketReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../auth/register/registerForm/authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  ticket: ticketReducer,
  form: formReducer,
  auth: authReducer,
});

export default rootReducer;
