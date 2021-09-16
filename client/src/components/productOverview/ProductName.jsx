/* eslint-disable react/prop-types */
import React from 'react';

const ProductName = (props) => (
  <div className='product-title'>
    <span className='product product-category'>{props.category}</span>
    <span className='product product-name'>{props.name}</span>
    {
      (props.sale)
        ? <><span className='product price' style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${props.price}</span>
        <span className='product-sale' style={{ color: 'red' }}>{props.sale}</span></>
        : <span className='product price'>${props.price}</span>
    }
  </div>
);

export default ProductName;
