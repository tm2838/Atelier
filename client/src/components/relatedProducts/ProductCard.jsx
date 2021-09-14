/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button.jsx';
import StarRating from '../common/starRating.jsx';
import './styles.css';

const ProductCard = (props) => {
  const productCategory = props.product.category.toUpperCase();
  return (
    <div className='card'>
      <Button type={ props.type } />
      <img src='' alt={ props.product.name } />
      <div className='container'>
        <p>{productCategory}</p>
        <p><b>{ props.product.name }</b></p>
        {/* 3. price for default style
          if on sale, sale price in red followed by orig. price w/ strikethrough */}
        <p>{ props.product.default_price }</p>
        <StarRating />
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.object,
//   name: PropTypes.string,
//   category: PropTypes.string,
//   default_price: PropTypes.number,
//   type: PropTypes.string,
// };

export default ProductCard;
