import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import testReview from '../../../fixtures/testReview.json';
import ProductBreakdown from '../productBreakdown.jsx';

describe('productBreakdown', () => {
  const testStore = createStore(
    rootReducer,
    {
      reviews: testReview.reviews,
      reviewMeta: testReview.reviewMeta,
    },
    applyMiddleware(thunk),
  );
  it('should render a list of characteristics', () => {
    const { getByText, queryByText } = render(
      <Provider store={testStore}>
        <ProductBreakdown />
      </Provider>,
    );

    expect(getByText(/Comfort/)).toBeTruthy();
    expect(getByText(/Fit/)).toBeTruthy();
    expect(getByText(/Quality/)).toBeTruthy();
    expect(getByText(/Length/)).toBeTruthy();
    expect(queryByText(/Size/)).toBeFalsy();
  });
});
