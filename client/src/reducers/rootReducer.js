import { combineReducers } from 'redux';
import currentProduct from './productOverview/currentProduct';
import styleList from './productOverview/styleList';


// example root reducer
export default combineReducers({
  currentProduct,
  styleList
})