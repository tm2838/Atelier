/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../common/starRating.jsx';
import StarBreakdown from './starBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import CSS from './productReviews.module.css';

const Ratings = (props) => (
  <div>
    {props.reviews.length === 0
      ? <>No Reviews Available</>
      : <>
          {props.reviewMeta.ratingScore && (
            <div className={CSS['rating-summary']}>
              <div className={CSS['rating-score']}>{props.reviewMeta.ratingScore}</div>
              <StarRating />
            </div>
          )}
          {props.reviewMeta.recommendationRate && (
            <div className={CSS['rating-recommendation']}>{props.reviewMeta.recommendationRate !== 'NaN' ? props.reviewMeta.recommendationRate : 0}%
            of reviews recommend this product</div>
          )}
          <StarBreakdown />
          <ProductBreakdown />
        </>
    }

  </div>
);

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(Ratings);
