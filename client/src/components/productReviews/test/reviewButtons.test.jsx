/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';

import ReviewButtons from '../reviewButtons.jsx';
import '../../common/fontAwesomeIcons';

describe('reviewButtons', () => {
  let testStore = createStore(
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

  it('should have a more review button when there are more than two reviews', () => {
    const { getByRole } = render(
      <Provider store={testStore}>
      <ReviewButtons reviews={testReview} onAddReview={() => {}}/>
      </Provider>,
    );

    expect(getByRole('button', { name: /more reviews/i })).toBeTruthy();
    expect(getByRole('button', { name: /add a review/i })).toBeTruthy();
  });

  it('should not have a more review button when there are less than two reviews', () => {
    testStore = createStore(
      rootReducer,
      {
        reviews: testReview.reviews[0],
        reviewMeta: testReview.reviewMeta,
      },
      applyMiddleware(thunk),
    );
    const { queryByRole, getByRole } = render(
      <Provider store={testStore}>
        <ReviewButtons reviews={testReview} onAddReview={() => {}}/>
      </Provider>,
    );

    expect(queryByRole('button', { name: /more reviews/i })).toBeFalsy();
    expect(getByRole('button', { name: /add a review/i })).toBeTruthy();
  });

  it('should pop up a write new review modal when a button is clicked', () => {
    const onAddReview = jest.fn();
    const { getByRole, getByText } = render(
      <Provider store={testStore}>
        <ReviewButtons reviews={testReview} onAddReview={onAddReview}/>
      </Provider>,
    );

    fireEvent.click(getByText(/add a review/i));
    expect(onAddReview).toHaveBeenCalledTimes(1);
  });
});
