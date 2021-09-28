import React from 'react';
import PropTypes from 'prop-types';

const ProductName = (props) => (
  <div className='product-title'>
    <span className='product product-category'>{props.category}</span>
    <span className='product product-name'>{props.name}</span>
    {
      (props.sale)
        ? <><span className='product-price' style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${props.price}</span>
        <span className='product-sale' style={{ color: 'red' }}>{props.sale}</span></>
        : <span className='product-price'>${props.price}</span>
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
