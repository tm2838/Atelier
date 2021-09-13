// example reducer
export default (state = {}, action) => {
  if (action.type === 'EXAMPLE_ACTION') {
    return action.example;
  }
  return state;
};
