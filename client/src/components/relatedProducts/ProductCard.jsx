import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import StarRating from '../common/starRating.jsx';
import './styles.css';

const ProductCard = (props) => {
  const styles = props.product.styles.results;
  let photo = '';
  for (let i = 0; i < styles.length; i += 1) {
    if (styles[i]['default?'] === true) {
      photo = styles[i].photos[0].thumbnail_url;
    }
  }
  const { category, name } = props.product.product;
  return (
    <div className='card'>
      <div className='image' style={{ backgroundImage: `url(${photo})`, size: 'cover', repeat: 'no-repeat' }}>
        <Button type={ props.type }
          product={ props.product }
          onClickStar={ props.onClickStar }
          onClickCircleX={ props.onClickCircleX }
        />
        {!photo ? props.product.product.name : ''}
      </div>
      <div>
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
  onClickCircleX: PropTypes.func,
};

export default ProductCard;
