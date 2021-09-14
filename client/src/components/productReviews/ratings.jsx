/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../common/starRating.jsx';
import StarBreakdown from './starBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import CSS from './productReviews.module.css';

const Ratings = (props) => (
  <div>
    {props.reviewMeta.ratingScore && (
      <div className={CSS['rating-summary']}>
        <div>{props.reviewMeta.ratingScore}</div>
        <StarRating />
      </div>
    )}

    <StarBreakdown />

    {props.reviewMeta.recommendationRate && (
      <div>{props.reviewMeta.recommendationRate}%
      of reviews recommend this product</div>
    )}

    <ProductBreakdown />
  </div>
);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(Ratings);
