import history from '../../history';
import { REGISTER_USER, LOGIN_USER, LOGIN_ERROR, SIGN_OUT_USER } from './authConstants';

import api from '../../utils/api';

export const login = values => {
  return async (dispatch) => {
    dispatch({type: LOGIN_USER, payload: {values}})
    try {
      await api.signIn(values.email, values.password)
        .then(user => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem("token", user.token);
            localStorage.setItem('email', values.email);
            localStorage.setItem("userId", user._id);

            history.goBack();
          }
        })
      } catch (error) {
        console.log(error);
        if (error.data.message === "Incorrect password or email") {
          dispatch({type: LOGIN_ERROR})
        } 
      };
    }
};

export const register = values => {
  return async (dispatch) => {
    dispatch({type: REGISTER_USER,payload: {values}})
    try {
      await api.signUp(values.email, values.password)
        .then((user) => {
          localStorage.setItem('email', user.email);
          history.push('/login')
        })  
    } catch (error) {
      console.log(error);
    } 
  }
};

export const logout = () => { 
  return {
    type: SIGN_OUT_USER
  }
};

