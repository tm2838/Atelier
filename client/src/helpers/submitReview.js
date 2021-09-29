const submitReview = (review) => fetch('http://127.0.0.1:3000/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(review),
})
  .catch((error) => console.log(error)); //eslint-disable-line

export default submitReview;
