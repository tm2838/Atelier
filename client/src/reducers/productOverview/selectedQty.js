export default (state = 0, action) => {
  if (action.type === 'CHANGE_QTY') {
    return action.quantity;
  }
  return state;
};
