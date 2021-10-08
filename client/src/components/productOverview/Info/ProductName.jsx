import React from 'react';
import PropTypes from 'prop-types';

const ProductName = ({
  category,
  name,
  price,
  sale,
}) => (
  <div className='product-title'>
    <span className='product product-category'>{category}</span>
    <span className='product product-name'>{name}</span>
    {
      (sale)
        ? <><span className='product-price' style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${price}</span>
        <span className='product-sale' style={{ color: 'red' }}>{sale}</span></>
        : <span className='product-price'>${price}</span>
    }
  </div>
);

ProductName.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  sale: PropTypes.string,
};

export default ProductName;
