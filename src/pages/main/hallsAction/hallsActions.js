import { LOAD_HALLS } from './hallsConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import api from '../../../utils/api';

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
      await api.getHalls()
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