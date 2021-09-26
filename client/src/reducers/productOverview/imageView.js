export default (state = false, action) => {
  if (action.type === 'CHANGE_IMAGE') {
    return action.view;
  }
  return state;
};
