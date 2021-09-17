/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../reducers/rootReducer';
import testReview from '../../fixtures/testReview.json';

import ReviewButtons from './reviewButtons.jsx';

describe('reviewButtons', () => {
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

  it('should have a more review button when there are more than two reviews', () => {
    const { getByRole } = render(
      <Provider store={testStore}>
      <ReviewButtons reviews={testReview} onAddReview={() => {}}/>
      </Provider>,
    );

    expect(getByRole('button', { name: /more reviews/i })).toBeTruthy();
  });
});
