/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import configureStore from '../store';
import testProduct from '../fixtures/testProduct.json';
import testRelatedProducts from '../fixtures/testRelatedProducts.json';
import testReview from '../fixtures/testReview.json';
import testStore from '../fixtures/testStore';

import App from './app.jsx';
import './common/fontAwesomeIcons';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ status: 200 }),
    }));
  });

  afterEach(() => {
    fetch.mockClear();
  });

  it('should render without crashing', () => {
    const { getByTestId, getByRole } = render(<Provider store={testStore}>
      <App />
      </Provider>);

    expect(getByTestId('logo')).toBeTruthy();
  });
});
