export default (state = [], action) => {
  if (action.type === 'CHANGE_STYLES') {
    return action.styles;
  }
  return state;
};
