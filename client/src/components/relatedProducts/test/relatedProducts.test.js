/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import RelatedProducts from '../RelatedProducts.jsx';
import relatedProductsTestData from './relatedProductsTestData.json';

describe('relatedProducts', () => {
  beforeEach(() => {
    fetchMock.mockIf('http://127.0.0.1:3000', (req) => {
      if (req.url.endsWith('/relatedProducts')) {
        return relatedProductsTestData;
      }
      return {};
    });
  });

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

  // it('should render right arrow when first related product displayed is at index 0',
  //   () => {
  //     const { getByTestId } = render(
  //       <Provider store={testStore}>
  //         <RelatedProducts />
  //       </Provider>,
  //     );
  //     expect(getByTestId('right-arrow')).toBeInTheDocument();
  //   });

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
