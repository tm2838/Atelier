import { combineReducers } from 'redux';
import reviews from './ratingsAndReviews/reviewsReducer';
import filters from './ratingsAndReviews/filtersReducer';
import loadedReviews from './ratingsAndReviews/loadedReviewsReducer';
import remainingReviews from './ratingsAndReviews/remainingReviewsReducer';
import reviewMeta from './ratingsAndReviews/reviewMetaReducer';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';
import currentStyle from './productOverview/currentStyle';
import selectedSku from './productOverview/selectedSku';
import selectedQty from './productOverview/selectedQty';
import inStockQty from './productOverview/inStockQty';
import relatedProducts from './relatedProducts/relatedProductsReducer';

export default combineReducers({
  currentProduct,
  styleList,
  currentStyle,
  selectedSku,
  selectedQty,
  inStockQty,
  reviews,
  reviewMeta,
  loadedReviews,
  remainingReviews,
  filters,
  relatedProducts,
});
