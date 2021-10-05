import changeProduct from './productOverview/currentProduct';
import changeStyles from './productOverview/styleList';
import changeStyle from './productOverview/currentStyle';
import resetSelected from './productOverview/resetSelected';
import { changeReviews, changeLoadedReviews, changeRemainingReviews } from './ratingsAndReviews/changeReviews';
import changeReviewMeta from './ratingsAndReviews/changeReviewMeta';
import changeRelatedProducts from './relatedProducts/changeRelatedProducts';

const fetchData = (id) => (dispatch) => {
  const url = `/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(resetSelected());
      dispatch(changeProduct(data.product));
      dispatch(changeStyles(data.styles.results));
      dispatch(changeStyle(data.styles.results[0]));
      dispatch(changeReviews(data.reviews));
      const loadedReviews = data.reviews.slice(0, 2);
      const remainingReviews = data.reviews.filter((review) => !loadedReviews.includes(review));
      dispatch(changeLoadedReviews(loadedReviews));
      dispatch(changeRemainingReviews(remainingReviews));
      dispatch(changeReviewMeta(data.reviewMeta));
      dispatch(changeRelatedProducts(data.relatedProducts));
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default fetchData;
