/* eslint-disable no-unused-vars */
import React from 'react';
import { StateMock } from '@react-mock/state';
import 'regenerator-runtime/runtime';
import { render, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import RelatedProducts from '../RelatedProducts.jsx';
import ProductCard from '../ProductCard.jsx';

describe('relatedProducts', () => {
  const testStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  );

  it('should render RelatedProducts component without crashing', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <RelatedProducts />
      </Provider>,
    );
    expect(getByText('RELATED PRODUCTS')).toBeTruthy();
  });
});
