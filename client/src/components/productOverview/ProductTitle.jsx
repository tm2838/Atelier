/* eslint-disable react/prop-types */
import React from 'react';

const ProductTitle = (props) => (
  <p className='product-title'>
  <span className='product product-category'>{props.category}</span>
  <span className='product product-name'>{props.name}</span>
  <span className='product price'>${props.price}</span>
  </p>
);

export default ProductTitle;
