import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import testReview from './testReview.json';
import testProduct from './testProduct.json';

const testStore = createStore(
  rootReducer,
  {
    currentProduct: testProduct[0].product,
    styleList: testProduct[0].styles.results,
    reviews: testReview.reviews,
    reviewMeta: testReview.reviewMeta,
  },
  applyMiddleware(thunk),
);

export default testStore;
