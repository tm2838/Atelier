import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';
import Ratings from '../ratings.jsx';

describe('Ratings', () => {
  const testStore = createStore(
    rootReducer,
    {
      reviews: testReview.reviews,
      reviewMeta: testReview.reviewMeta,
    },
    applyMiddleware(thunk),
  );
  it('should render the rating section without crash', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Ratings />
      </Provider>,
    );

    expect(getByText(/3.7/)).toBeTruthy();
    // expect(getByText(/3.7/)).toHaveStyle('font-weight: "bold"');
    expect(getByText(/42.86% of reviews recommend this product/)).toBeTruthy();
  });
});
