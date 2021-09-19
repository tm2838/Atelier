import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../common/starRating.jsx';

const ProductRating = (props) => (
  <div className='overview-rating'>
    <StarRating />
    <a className='rating-link' data-testid='rating-link'><u>Read all {props.reviewNumber} reviews</u></a>
  </div>
);

ProductRating.propTypes = {
  reviewNumber: PropTypes.number,
};

export default ProductRating;
