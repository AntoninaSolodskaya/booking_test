import { createReducer } from '../../utils/reducerUtil';
import { LOGIN_USER, SIGN_OUT_USER, LOGIN_ERROR, REGISTER_ERROR } from './authConstants';

const initialState = {
  currentUser: null
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.values.email,
    isErr: false
  }
};

export const loginError = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: true
  }
};

export const registerError = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: true
  }
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: null,
    isErr: false
  }
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGIN_ERROR]: loginError,
  [REGISTER_ERROR]: registerError,
  [SIGN_OUT_USER]: signOutUser
});
