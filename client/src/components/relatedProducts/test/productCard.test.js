/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';

describe('productCard', () => {
  const relatedProduct = {
    product: {
      category: 'Accessories',
      default_price: '69.00',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      id: 47422,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
    },
    styles: {
      results: [
        {
          style_id: 286900,
          name: 'Black Lenses & Black Frame',
          original_price: '69.00',
          sale_price: null,
          photos: [{ thumbnail_url: null, url: null }],
          'default?': false,
        },
        {
          style_id: 286901,
          name: 'Black Lenses & Gold Frame',
          original_price: '69.00',
          sale_price: '30.00',
          photos: [{ thumbnail_url: null, url: null }],
          'default?': true,
        },
        {
          style_id: 286902,
          name: 'Gold Lenses & Black Frame',
          original_price: '69.00',
          sale_price: null,
          photos: [{ thumbnail_url: null, url: null }],
          'default?': false,
        },
      ],
    },
  };

  it('should render related product ProductCard component without crashing', () => {
    const { getAllByText } = render(<ProductCard product={ relatedProduct } />);
    expect(getAllByText(/Bright Future Sunglasses/i)).toBeTruthy();
  });

  it('should render sale price when default style is on sale', () => {
    const { getByText } = render(<ProductCard product={ relatedProduct } />);
    expect(getByText(/30.00/)).toBeTruthy();
  });

  it('should also render default price when default style is on sale', () => {
    const { getByText } = render(<ProductCard product={ relatedProduct } />);
    expect(getByText(/69.00/)).toBeTruthy();
  });

  it('should render default price when default style is not on sale', () => {
    relatedProduct.styles.results[1].sale_price = null;
    const { getByText } = render(<ProductCard product={ relatedProduct } />);
    expect(getByText(/69.00/)).toBeTruthy();
  });

  it('should not render sale price when default style is not on sale', () => {
    relatedProduct.styles.results[1].sale_price = null;
    const { queryAllByText } = render(<ProductCard product={ relatedProduct } />);
    expect(queryAllByText(/30.00/)).toHaveLength(0);
  });
});
