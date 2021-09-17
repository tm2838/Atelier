/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../reducers/rootReducer';
import testReview from '../../fixtures/testReview.json';
import testRelatedProducts from '../../fixtures/testRelatedProducts.json';
import RelatedProducts from './RelatedProducts.jsx';

describe('relatedProducts', () => {
  const testStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  );

  it('should render without crashing', () => {
    const { getByTestId } = render(
      <Provider store={testStore}>
        <RelatedProducts />
      </Provider>,
    );

    expect(getByTestId('relatedProducts')).toBeTruthy();
  });
});
