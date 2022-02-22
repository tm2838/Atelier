/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../../common/starRating.jsx';
import StarBreakdown from './starBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import '../ratingsAndReviews.css';

const Ratings = ({ reviews, reviewMeta }) => (
  <div className='ratings-container'>
    {reviews.length === 0
      ? <>No Reviews Available</>
      : <>
          {reviewMeta.ratingScore && (
            <div className='rating-summary'>
              <div className='rating-score'>{reviewMeta.ratingScore}</div>
              <StarRating rating={reviewMeta.ratingScore}/>
            </div>
          )}
          {reviewMeta.recommendationRate && (
            <div className='rating-recommendation'>{reviewMeta.recommendationRate}%
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
