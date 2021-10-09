/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testProduct from '../../../fixtures/testProduct.json';

import StyleList from '../Info/StyleList.jsx';
import '../../common/fontAwesomeIcons';

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
      currentStyle: {},
    },
    applyMiddleware(thunk),
  );
});

test('renders styles list', () => {
  const { getByTestId } = render(<Provider store={testStore}>
    <StyleList />
    </Provider>);
  expect(getByTestId('style-name').textContent).toEqual('STYLE > style1');
});
