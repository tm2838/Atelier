/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../common/starRating.jsx';
import CSS from './productReviews.module.css';

const Ratings = (props) => (
    <div>
    {props.reviewMeta.ratingScore && (
      <div className={CSS['rating-summary']}>
        <div>{props.reviewMeta.ratingScore.toFixed(1)}</div>
        <StarRating />
      </div>
    )}

    {props.reviewMeta.recommendationRate && (
      <div>{(props.reviewMeta.recommendationRate * 100).toFixed(0)}%
      of reviews recommend this product</div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(Ratings);
