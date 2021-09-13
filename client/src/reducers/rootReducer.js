import { combineReducers } from 'redux';
import placeholder from './placeholder';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';

// example root reducer
export default combineReducers({
  placeholder,
  currentProduct,
  styleList,
});
