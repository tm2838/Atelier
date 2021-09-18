import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';
import StarBreakdown from '../starBreakdown.jsx';

describe('starBreakdown', () => {
  const testStore = createStore(
    rootReducer,
    {
      reviews: testReview.reviews,
      reviewMeta: testReview.reviewMeta,
    },
    applyMiddleware(thunk),
  );
  it('should render the distribution of star reviews', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <StarBreakdown />
      </Provider>,
    );

    expect(getByText(/1 Star: ------- 3 reviews/)).toBeTruthy();
    expect(getByText(/4 Stars: ------- 6 reviews/)).toBeTruthy();
    expect(getByText(/5 Stars: ------- 5 reviews/)).toBeTruthy();
    expect(getByText(/2 Stars: ------- 0 reviews/)).toBeTruthy();
    expect(getByText(/3 Stars: ------- 0 reviews/)).toBeTruthy();
  });
});
