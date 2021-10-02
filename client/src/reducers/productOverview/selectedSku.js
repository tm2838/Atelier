export default (state = null, action) => {
  if (action.type === 'CHANGE_SKU') {
    return action.sku;
  }
  return state;
};
