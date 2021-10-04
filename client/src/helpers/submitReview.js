const submitReview = (review) => fetch('/reviews', {
  method: 'POST',
  body: review,
})
  .catch((error) => console.log(error)); //eslint-disable-line

export default submitReview;
