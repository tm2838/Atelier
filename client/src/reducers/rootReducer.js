import { combineReducers } from 'redux';
import reviews from './ratingsAndReviews/reviewsReducer';
import filters from './ratingsAndReviews/filtersReducer';
import loadedReviews from './ratingsAndReviews/loadedReviewsReducer';
import remainingReviews from './ratingsAndReviews/remainingReviewsReducer';
import reviewMeta from './ratingsAndReviews/reviewMetaReducer';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';
import currentStyle from './productOverview/currentStyle';
import imageView from './productOverview/imageView';

export default combineReducers({
  currentProduct,
  styleList,
  currentStyle,
  imageView,
  reviews,
  reviewMeta,
  loadedReviews,
  remainingReviews,
  filters,
});
