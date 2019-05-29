import { REGISTER_SUCCESS, LOGIN_SUCCESS, AUTH_FAIL } from './authConstants';

import api from '../../../utils/api';


export const register = (values, ownProps) => {
  return dispatch => {
    api.signUp(values.email,values.password)
      .then(res => { 
        dispatch(signUpSuccess(res.email, res._id, ownProps));
        ownProps.history.push('/');
      })
  };
};

export const signUpSuccess = (email, _id) => {
  return {
    type: REGISTER_SUCCESS,
    email,
    _id
  };
};


export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error
  };
};

export const login = (values, ownProps) => {
  return dispatch => {
    api.signIn(values.email, values.password)
      .then(res => {
        dispatch(loginSuccess(res.token, res._id, values.email, ownProps));
      })
  };
};

export const loginSuccess = (token, _id, email) => {
  return {
    type: LOGIN_SUCCESS,
    token,
    _id,
    email
  };
};
