/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import testReview from '../../../fixtures/testReview.json';
import testStore from '../../../fixtures/testStore';

import RatingsAndReviews from '../ratingsAndReviews.jsx';
import '../../common/fontAwesomeIcons';

describe('ratingsAndReviews', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(testReview),
    }));
  });

  afterEach(() => {
    fetch.mockClear();
  });

  it('should have a section review title', () => {
    const { getByRole } = render(
      <Provider store={testStore}>
        <Router>
          <RatingsAndReviews />
        </Router>
      </Provider>,
    );

    expect(getByRole('heading', { name: /ratings & reviews/i })).toBeTruthy();
  });

  it('should pop up a write new review modal when a button is clicked', () => {
    const { getByRole, getByText } = render(
      <Provider store={testStore}>
        <Router>
          <RatingsAndReviews />
        </Router>
      </Provider>,
    );

    fireEvent.click(getByText(/add a review/i));
    expect(getByText(/write your review/i)).toBeTruthy();
  });
});
