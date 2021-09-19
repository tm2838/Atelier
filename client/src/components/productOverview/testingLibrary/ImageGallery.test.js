/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../../reducers/rootReducer';
import testProduct from '../../../fixtures/testProduct.json';

import ImageGallery from '../ImageGallery.jsx';

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

test('renders images from state in thumbnails', () => {
  const { getAllByAltText } = render(<Provider store={testStore}>
    <ImageGallery />
  </Provider>);
  expect(getAllByAltText('Thumbnail').length).toEqual(5);
});

test('changes images when clicking the second thumbnail image', () => {
  const { getByTestId } = render(
    <Provider store={testStore}>
      <ImageGallery />
    </Provider>,
  );
  expect(getByTestId('gallery-img').src).toEqual('http://localhost/fake-url');
  fireEvent.click(getByTestId('gallery-thumb-1'));
  expect(getByTestId('gallery-img').src).toBe('http://localhost/another-fake-url');
});

test('changes images when clicking the third thumbnail image', () => {
  const { getByTestId } = render(
    <Provider store={testStore}>
      <ImageGallery />
    </Provider>,
  );
  expect(getByTestId('gallery-img').src).toEqual('http://localhost/fake-url');
  fireEvent.click(getByTestId('gallery-thumb-2'));
  expect(getByTestId('gallery-img').src).toBe('http://localhost/third-fake-url');
});

test('changes images when clicking the fourth thumbnail image', () => {
  const { getByTestId } = render(
    <Provider store={testStore}>
      <ImageGallery />
    </Provider>,
  );
  expect(getByTestId('gallery-img').src).toEqual('http://localhost/fake-url');
  fireEvent.click(getByTestId('gallery-thumb-3'));
  expect(getByTestId('gallery-img').src).toBe('http://localhost/fourth-fake-url');
});

test('changes images when clicking the fifth thumbnail image', () => {
  const { getByTestId } = render(
    <Provider store={testStore}>
      <ImageGallery />
    </Provider>,
  );
  expect(getByTestId('gallery-img').src).toEqual('http://localhost/fake-url');
  fireEvent.click(getByTestId('gallery-thumb-4'));
  expect(getByTestId('gallery-img').src).toBe('http://localhost/fifth-fake-url');
});
