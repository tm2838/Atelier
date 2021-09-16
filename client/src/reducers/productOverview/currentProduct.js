export default (state = {}, action) => {
  if (action.type === 'CHANGE_PRODUCT') {
    return action.product;
  }
  return state;
};
