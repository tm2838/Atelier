import { combineReducers } from 'redux';
import placeholder from './placeholder';
import reviewsReducer from './productReviews/reviewsReducer';

// example root reducer
export default combineReducers({
  placeholder,
  reviews: reviewsReducer
});
