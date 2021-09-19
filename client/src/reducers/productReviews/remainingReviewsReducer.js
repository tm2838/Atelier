const remainingReviewsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_REMAINING_REVIEWS') {
    return action.remainingReviews;
  }
  return state;
};

export default remainingReviewsReducer;
