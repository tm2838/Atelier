export default (state = {}, action) => {
  if (action.type === 'CHANGE_STYLE') {
    return action.style;
  }
  return state;
};
