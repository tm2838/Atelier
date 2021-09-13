import changeReviews from './productReviews/changeReviews';

const fetchReviews = () => (dispatch) => {
  fetch('/reviews')
    .then((response) => response.json())
    .then((response) => {
      dispatch(changeReviews(response.reviews));
    })
    .catch((err) => console.log(err)); //eslint-disable-line
};

export default fetchReviews;
