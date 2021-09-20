/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent, waitfor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';
import testStore from '../../../fixtures/testStore';

import ReviewButtons from '../reviewButtons.jsx';
import '../../common/fontAwesomeIcons';

describe.only('reviewButtons', () => {
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
    const { findByRole, getByRole } = render(
      <Provider store={testStore}>
        <ReviewButtons onLoadReview={() => {}} onAddReview={() => {}}/>
      </Provider>,
    );

    expect(findByRole('button', { name: /more reviews/i })).toBeTruthy();
    expect(getByRole('button', { name: /add a review/i })).toBeTruthy();
  });

  it('should not have a more review button when there are no unloaded reviews', () => {
    const newTestStore = createStore(
      rootReducer,
      {
        remainingReviews: [],
      },
      applyMiddleware(thunk),
    );
    const { queryByRole, getByRole } = render(
      <Provider store={newTestStore}>
        <ReviewButtons onLoadReview={() => {}} onAddReview={() => {}}/>
      </Provider>,
    );
    expect(queryByRole('button', { name: /more reviews/i })).toBeFalsy();
    expect(getByRole('button', { name: /add a review/i })).toBeTruthy();
  });

  it('should pop up a modal when the "add a review" button is clicked', () => {
    const onAddReview = jest.fn();
    const { getByRole } = render(
      <Provider store={testStore}>
        <ReviewButtons onLoadReview={() => {}} onAddReview={onAddReview}/>
      </Provider>,
    );

    fireEvent.click(getByRole('button', { name: /add a review/i }));
    expect(onAddReview).toHaveBeenCalledTimes(1);
  });
});
