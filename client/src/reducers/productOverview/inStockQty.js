export default (state = [], action) => {
  if (action.type === 'CHANGE_INSTOCKQTY') {
    return action.instock;
  }
  return state;
};
