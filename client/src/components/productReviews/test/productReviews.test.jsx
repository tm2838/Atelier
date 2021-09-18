/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';

import ProductReviews from '../productReviews.jsx';
import '../../common/fontAwesomeIcons';

describe('productReviews', () => {
  const testStore = createStore(
    rootReducer,
    {
      reviews: testReview.reviews,
      reviewMeta: testReview.reviewMeta,
    },
    applyMiddleware(thunk),
  );
  beforeEach(() => {
    fetchMock.mockIf('http://127.0.0.1:3000', (req) => {
      if (req.url.endsWith('/reviews')) {
        return testReview;
      }

      return {};
    });
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should have a section review title', () => {
    const { getByRole } = render(
      <Provider store={testStore}>
        <ProductReviews />
      </Provider>,
    );

    expect(getByRole('heading', { name: /ratings & reviews/i })).toBeTruthy();
  });

  it('should pop up a write new review modal when a button is clicked', () => {
    const { getByRole, getByText } = render(
      <Provider store={testStore}>
        <ProductReviews />
      </Provider>,
    );

    fireEvent.click(getByText(/add a review/i));
    expect(getByText(/write your review/i)).toBeTruthy();
  });
});
