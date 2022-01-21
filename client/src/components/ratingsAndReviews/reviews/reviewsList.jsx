/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Review from './review.jsx';
import '../ratingsAndReviews.css';

const ReviewsList = ({ loadedReviews }) => {
  const reviewListLength = loadedReviews.length === 0 ? 0 : '500px';
  return (
  <div className='reviews-list' style={{ height: reviewListLength }}>
    {loadedReviews.map(
      (review) => <Review key={review.review_id} review={review}/>,
    )}
  </div>
  );
};

const mapStateToProps = (state) => ({
  loadedReviews: state.loadedReviews,
});

export default connect(mapStateToProps)(ReviewsList);
