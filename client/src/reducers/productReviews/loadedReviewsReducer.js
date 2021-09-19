const loadedReviewsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_LOADED_REVIEWS') {
    return action.loadedReviews;
  }
  return state;
};

export default loadedReviewsReducer;
