/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testProduct from '../../../fixtures/testProduct.json';

import AddToCart from '../AddToCart.jsx';

let testStore = null;

beforeAll(() => {
  testStore = createStore(
    rootReducer,
    {
      currentProduct: testProduct[0].product,
      styleList: testProduct[0].styles.results,
      currentStyle: testProduct[0].styles.results[0],
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

test('renders the selected value in the dropdown', () => {
  const { getByTestId, getByRole } = render(
    <Provider store={testStore}>
      <AddToCart />
    </Provider>,
  );
  expect(getByTestId('select-sizes').value).toEqual('SELECT SIZE');
  // fireEvent.change(getByTestId('select-sizes'), { target: { value: '7' } });
  // expect(getByTestId('select-sizes').value).toBe('7');
});
