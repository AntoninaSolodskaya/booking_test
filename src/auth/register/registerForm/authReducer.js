import { REGISTER_SUCCESS, LOGIN_SUCCESS, AUTH_FAIL } from './authConstants';

const initialState = {
  email: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_SUCCESS:
      return {
        ...state,
        email: action.email,
        userId: action._id
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        token: action.token,
        userId: action._id
      };

    case AUTH_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default authReducer;
