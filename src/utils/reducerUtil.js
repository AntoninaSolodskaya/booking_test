export const createReducer = (initialState, action) => {
  return (state = initialState, {type, payload}) => {
    const handler = action[type];

    return handler ? handler(state, payload): state
  }
};