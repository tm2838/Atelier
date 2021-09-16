import { combineReducers } from 'redux';
import reviews from './productReviews/reviewsReducer';
import reviewMeta from './productReviews/reviewMetaReducer';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';

// example root reducer
export default combineReducers({
  currentProduct,
  styleList,
  reviews,
  reviewMeta,
});
