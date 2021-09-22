/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import RelatedProducts from '../RelatedProducts.jsx';
import relatedProducts from './relatedProductsTestData.json';

describe('relatedProducts', () => {
  beforeEach(() => {
    fetchMock.mockIf('http://127.0.0.1:3000', (req) => {
      if (req.url.endsWith('/relatedProducts')) {
        // return relatedProducts;
        RelatedProducts.setState({
          relatedProducts,
        });
      }
      return {};
    });
  });
  // beforeEach(() => {
  //   // if you have an existing `beforeEach` just add the following lines to it
  //   fetchMock.mockIf(/^https?:\/\/example.com.*$/, req => {
  //     if (req.url.endsWith('/path1')) {
  //       return 'some response body'
  //     } else if (req.url.endsWith('/path2')) {
  //       return {
  //         body: 'another response body',
  //         headers: {
  //           'X-Some-Response-Header': 'Some header value'
  //         }
  //       }
  //     } else {
  //       return {
  //         status: 404,
  //         body: 'Not Found'
  //       }

  afterEach(() => {
    fetchMock.resetMocks();
  });

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

  it('should not render left arrow when first related product displayed is at index 0',
    () => {
      const { queryAllByTestId } = render(
        <Provider store={testStore}>
          <RelatedProducts />
        </Provider>,
      );
      expect(queryAllByTestId('left-arrow')).toHaveLength(0);
    });

  it('should render right arrow when first related product displayed is at index 0',
    () => {
      const { getByTestId } = render(
        <Provider store={testStore}>
          <RelatedProducts />
        </Provider>,
      );
      expect(getByTestId('right-arrow')).toBeInTheDocument();
    });

  // it('should render left arrow when first related product displayed is at index 1',
  //   () => {
  //     const { getByTestId } = render(
  //       <Provider store={testStore}>
  //         <RelatedProducts />
  //       </Provider>,
  //     );
  //     expect(getByTestId('left-arrow')).toBeTruthy();
  //   });

  // it('should not render right arrow when first related product displayed
  // is at index array length - 4',
  //   () => {
  //     const { queryAllByTestId } = render(
  //       <Provider store={testStore}>
  //         <RelatedProducts />
  //       </Provider>,
  //     );
  //     expect(queryAllByTestId('right-arrow')).toHaveLength(0);
  //   });
});
