import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import StarRating from '../common/starRating.jsx';

const ProductRating = (props) => (
  <div className='overview-rating'>
    <StarRating />
    <Link to='#ratings-and-reviews' className='rating-link' data-testid='rating-link'><u>Read all {props.reviewNumber} reviews</u></Link>
  </div>
);

ProductRating.propTypes = {
  reviewNumber: PropTypes.number,
};

export default ProductRating;
