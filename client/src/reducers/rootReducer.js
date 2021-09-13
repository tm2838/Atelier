import { combineReducers } from 'redux';
import reviewsReducer from './productReviews/reviewsReducer';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';

// example root reducer
export default combineReducers({
  currentProduct,
  styleList,
  reviews: reviewsReducer
})
