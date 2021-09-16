/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import configureStore from '../store';
import { testProduct } from '../fixtures/testProduct.json';
import { testRelatedProducts } from '../fixtures/testRelatedProducts.json';
import { testReview } from '../fixtures/testReview.json';

import App from './app.jsx';

describe('App', () => {
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
        return testReview;
      }

      return {};
    });
  });

  it('should render without crashing', () => {
    const { getByTestId } = render(<Provider store={configureStore()}>
      <App />
      </Provider>);

    expect(getByTestId('logo')).toBeTruthy();
  });
});
