import { changeReviews, changeLoadedReviews, changeRemainingReviews } from './ratingsAndReviews/changeReviews';
import changeReviewMeta from './ratingsAndReviews/changeReviewMeta';

const fetchReviews = (productId) => (dispatch) => {
  fetch(`/reviews/${productId}`)
    .then((response) => response.json())
    .then((response) => {
      dispatch(changeReviews(response.reviews));
      const loadedReviews = response.reviews.slice(0, 2);
      const remainingReviews = response.reviews.filter((review) => !loadedReviews.includes(review));
      dispatch(changeLoadedReviews(loadedReviews));
      dispatch(changeRemainingReviews(remainingReviews));
      dispatch(changeReviewMeta(response.reviewMeta));
    })
    .catch((err) => console.log(err)); //eslint-disable-line
};

export default fetchReviews;
