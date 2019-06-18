import { LOAD_HALLS } from './hallsConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import instance from '../../../utils/api';

export const fetchHalls = halls => {
  return {
    type: LOAD_HALLS,
    payload: halls
  }
};

export const loadAllHalls = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      await instance.get(`halls`)
        .then(halls => {
          dispatch(fetchHalls(halls))
        })
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
    }
  }
};