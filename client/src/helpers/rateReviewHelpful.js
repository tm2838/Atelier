export const rateReviewHelpful = (reviewId) => {
  fetch(`/reviews/${reviewId}/helpful`, {
    method: 'PUT',
  })
    .catch((error) => console.log(error)); //eslint-disable-line
};

export const reportReview = (reviewId) => {
  fetch(`/reviews/${reviewId}/report`, {
    method: 'PUT',
  })
    .catch((error) => console.log(error)); //eslint-disable-line
};
