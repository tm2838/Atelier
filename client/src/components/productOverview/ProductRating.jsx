import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRating from '../common/starRating.jsx';

const ProductRating = ({ reviewMeta, reviewNumber }) => (
  <div className='overview-rating'>
    <StarRating rating={reviewMeta.ratingScore}/>
    <a className='rating-link' data-testid='rating-link'><u>Read all {reviewNumber} reviews</u></a>
  </div>
);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

ProductRating.propTypes = {
  reviewMeta: PropTypes.object,
  reviewNumber: PropTypes.number,
};

export default connect(mapStateToProps)(ProductRating);
