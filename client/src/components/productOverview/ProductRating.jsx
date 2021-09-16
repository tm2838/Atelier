import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../common/starRating.jsx';

const ProductRating = (props) => (
  <div className='rating-overview'>
    <StarRating />
    <a><u>Read all {props.reviewNumber} reviews</u></a>
  </div>
);

ProductRating.propTypes = {
  reviewNumber: PropTypes.number,
};

export default ProductRating;
