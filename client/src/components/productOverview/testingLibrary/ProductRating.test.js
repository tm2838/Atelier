/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testProduct from '../../../fixtures/testProduct.json';
import testReview from '../../../fixtures/testReview.json';

import ProductInfo from '../ProductInfo.jsx';
import '../../common/fontAwesomeIcons';

let testStore = null;
beforeAll(() => {
  testStore = createStore(
    rootReducer,
    {
      currentProduct: testProduct[0].product,
      styleList: testProduct[0].styles.results,
      currentStyle: testProduct[0].styles.results[0],
      reviews: testReview.reviews,
    },
    applyMiddleware(thunk),
  );
});

afterAll(() => {
  testStore = createStore(
    rootReducer,
    {
      currentProduct: {},
      styleList: [],
    },
    applyMiddleware(thunk),
  );
});

test('renders product rating', () => {
  const { getByTestId } = render(<Provider store={testStore}>
    <ProductInfo />
    </Provider>);
  expect(getByTestId('rating-link').textContent).toEqual('Read all 3 reviews');
});
