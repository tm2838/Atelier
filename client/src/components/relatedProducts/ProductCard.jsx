import React from 'react';
import Button from './button.jsx';
import './styles.css';
// import star rating;

const ProductCard = props => {
  return (
    <div className='card'>
      <Button type={'outfit'} />
      <img src='' alt='' />
      <div className='container'>
        <p>product category</p>  {/* in caps */}
        <p><b>product name</b></p>
        {/* 3. price for default style
          if on sale, sale price in red followed by orig. price w/ strikethrough */}
        <p>product price</p>
        {/* <p>star rating</p> import Tingjun's component? hide if no reviews */}
      </div>
    </div>
  )
};

export default ProductCard;