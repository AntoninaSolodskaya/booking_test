import { createReducer } from '../../../utils/reducerUtil';
import { LOAD_HALLS } from './hallsConstants';

const initialState = [];

export const loadHalls = (state, payload) => {
  return payload.halls
}

export default createReducer(initialState, {
  [LOAD_HALLS]: loadHalls
})