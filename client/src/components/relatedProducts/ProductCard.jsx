import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import StarRating from '../common/starRating.jsx';
import './styles.css';

const ProductCard = (props) => {
  const { product } = props.product;
  const { category, name } = props.product.product;
  return (
    <div className='card'>
      <Button type={props.type} product={product} onClickStar={props.onClickStar} />      <img src='' alt={props.product.name} />
      <div className='container'>
        <p>{category.toUpperCase()}</p>
        <p><b>{name}</b></p>
        {/* 3. price for default style
          if on sale, sale price in red followed by orig. price w/ strikethrough */}
        <p>{props.product.product.default_price}</p>
        <StarRating />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
  category: PropTypes.string,
  default_price: PropTypes.number,
  type: PropTypes.string,
  showModal: PropTypes.bool,
  onClickStar: PropTypes.func,
  onClickCloseModal: PropTypes.func,
};

export default ProductCard;
