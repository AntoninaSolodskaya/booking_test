import { combineReducers } from 'redux';
import testReducer from '../test/testReducer';
import ticketReducer from '../pages/calendar/ticketReducer';
import modalsReducer from '../auth/modalsReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../auth/register/registerForm/authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  ticket: ticketReducer,
  modals: modalsReducer,
  form: formReducer,
  register: authReducer,
  login: authReducer,
});

export default rootReducer;
