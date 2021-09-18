/* eslint-disable no-unused-vars */
import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testProduct from '../../../fixtures/testProduct.json';

import ProductSummary from '../ProductSummary.jsx';

let testStore = null;
let container = null;
beforeAll(() => {
  testStore = createStore(
    rootReducer,
    {
      currentProduct: testProduct[0].product,
      styleList: testProduct[0].styles.results,
    },
    applyMiddleware(thunk),
  );
});

afterAll(() => {
  testStore = createStore(
    rootReducer,
    {
      currentProduct: {},
      styleList: [],
    },
    applyMiddleware(thunk),
  );
});

test('renders product info', () => {
  const { getByTestId } = render(<Provider store={testStore}>
    <ProductSummary />
    </Provider>);
  expect(getByTestId('product-slogan').textContent).toEqual('this is a fake slogan');
  expect(getByTestId('product-description').textContent).toEqual('this is a fake description');
});
