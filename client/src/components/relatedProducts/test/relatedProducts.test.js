/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import RelatedProductsContainer from '../RelatedProductsContainer.jsx';

describe('relatedProducts', () => {
  const testStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  );

  it('should render RelatedProducts component without crashing', () => {
    const location = {
      pathname: 47421,
    };
    const { getByTestId } = render(
      <Provider store={testStore}>
        <RelatedProductsContainer productId={47421} />
      </Provider>,
    );
    expect(getByTestId('related-products')).toBeTruthy();
  });
});
