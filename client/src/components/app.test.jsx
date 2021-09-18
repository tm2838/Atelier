/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../reducers/rootReducer';
import configureStore from '../store';
import testProduct from '../fixtures/testProduct.json';
import testRelatedProducts from '../fixtures/testRelatedProducts.json';
import testReview from '../fixtures/testReview.json';

import App from './app.jsx';
import './common/fontAwesomeIcons';

describe('App', () => {
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

  beforeEach(() => {
    fetchMock.mockIf('http://127.0.0.1:3000', (req) => {
      if (req.url.endsWith('/products')) {
        return testProduct[0];
      }

      if (req.url.endsWith('/relatedProducts')) {
        return testRelatedProducts;
      }

      if (req.url.endsWith(`/products/${testRelatedProducts[0]}`)) {
        return testProduct[1];
      }

      if (req.url.endsWith(`/products/${testRelatedProducts[1]}`)) {
        return testProduct[2];
      }

      if (req.url.endsWith('/reviews')) {
        return { body: testReview };
      }

      return {};
    });
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should render without crashing', () => {
    const { getByTestId, getByRole } = render(<Provider store={testStore}>
      <App />
      </Provider>);

    expect(getByTestId('logo')).toBeTruthy();
  });
});
