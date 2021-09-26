/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../../common/starRating.jsx';
import StarBreakdown from './starBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import CSS from '../ratingsAndReviews.module.css';

const Ratings = ({ reviews, reviewMeta }) => (
  <div className={CSS['ratings-container']}>
    {reviews.length === 0
      ? <>No Reviews Available</>
      : <>
          {reviewMeta.ratingScore && (
            <div className={CSS['rating-summary']}>
              <div className={CSS['rating-score']}>{reviewMeta.ratingScore}</div>
              <StarRating />
            </div>
          )}
          {reviewMeta.recommendationRate && (
            <div className={CSS['rating-recommendation']}>{reviewMeta.recommendationRate !== 'NaN' ? reviewMeta.recommendationRate : 0}%
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
