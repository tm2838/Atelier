import Redux from 'redux';

export default (state = {}, action) => {
  if (action.type === 'CHANGE_PRODUCT') {
    return action.product;
  } else {
    return state;
  }
}