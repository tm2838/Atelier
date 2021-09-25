export const rateReviewHelpful = (reviewId) => {
  fetch(`http://127.0.0.1:3000/reviews/${reviewId}/helpful`, {
    method: 'PUT',
  })
    .catch((error) => console.log(error)); //eslint-disable-line
};

export const reportReview = (reviewId) => {
  fetch(`http://127.0.0.1:3000/reviews/${reviewId}/report`, {
    method: 'PUT',
  })
    .catch((error) => console.log(error)); //eslint-disable-line
};
