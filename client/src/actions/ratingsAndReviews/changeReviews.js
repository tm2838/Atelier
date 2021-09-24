export const changeReviews = (reviews) => ({
  type: 'CHANGE_REVIEWS',
  reviews,
});

export const changeLoadedReviews = (loadedReviews) => ({
  type: 'CHANGE_LOADED_REVIEWS',
  loadedReviews,
});

export const changeRemainingReviews = (remainingReviews) => ({
  type: 'CHANGE_REMAINING_REVIEWS',
  remainingReviews,
});
