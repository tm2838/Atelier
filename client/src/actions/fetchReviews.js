import changeReviews from './productReviews/changeReviews';
import changeReviewMeta from './productReviews/changeReviewMeta';

const fetchReviews = () => (dispatch) => {
  fetch('/reviews')
    .then((response) => response.json())
    .then((response) => {
      dispatch(changeReviews(response.reviews));
      dispatch(changeReviewMeta(response.reviewMeta));
    })
    .catch((err) => console.log(err)); //eslint-disable-line
};

export default fetchReviews;
