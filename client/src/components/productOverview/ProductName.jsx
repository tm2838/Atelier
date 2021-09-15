/* eslint-disable react/prop-types */
import React from 'react';

const ProductName = (props) => (
  <p className='product-title'>
  <span className='product product-category'>{props.category}</span>
  <span className='product product-name'>{props.name}</span>
  <span className='product price'>${props.price}</span>
  </p>
);

export default ProductName;
