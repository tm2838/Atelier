const relatedProductsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_RELATEDPRODUCTS') {
    return action.relatedProducts;
  }
  return state;
};

export default relatedProductsReducer;
