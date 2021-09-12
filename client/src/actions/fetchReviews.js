import changeReviews from './productReviews/changeReviews';

const fetchReviews = () => {
  return (dispatch) => {
    fetch('/reviews')
    .then((response) => response.json())
    .then((response) => {
      dispatch(changeReviews(response.reviews))
    })
    .catch((err) => console.log(err));
  }
};

export default fetchReviews;