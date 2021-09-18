/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import rootReducer from '../../reducers/rootReducer';
import testRelatedProducts from '../../fixtures/testRelatedProducts.json';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';
import ProductCard from './ProductCard.jsx';

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

  const product = {
    product: {
      category: 'Accessories',
      default_price: '69.00',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      id: 47422,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
    },
  };

  it('should render related product ProductCard component without crashing', () => {
    const { getByText } = render(<ProductCard product={ product } />);
    expect(getByText('Bright Future Sunglasses')).toBeTruthy();
  });

  it('should render Outfit component without crashing', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Outfit />
      </Provider>,
    );
    expect(getByText('YOUR OUTFIT')).toBeTruthy();
  });
});
