/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';

describe('productCard', () => {
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
});
