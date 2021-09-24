const filtersReducer = (state = [], action) => {
  if (action.type === 'CHANGE_FILTERS') {
    return action.filters;
  }
  return state;
};

export default filtersReducer;
