const reviewsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_REVIEWS') {
    return action.reviews;
  }
  return state;
};

export default reviewsReducer;
