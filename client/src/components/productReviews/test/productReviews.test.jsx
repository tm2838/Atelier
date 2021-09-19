/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import testReview from '../../../fixtures/testReview.json';
import testStore from '../../../fixtures/testStore';

import ProductReviews from '../productReviews.jsx';
import '../../common/fontAwesomeIcons';

describe('productReviews', () => {
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
