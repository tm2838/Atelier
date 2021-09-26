/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../ratingsAndReviews.module.css';

const ReviewButtons = ({ remainingReviews, onLoadReviews, onAddReview }) => (
  <div className={CSS['review-buttons']}>
    {remainingReviews.length > 0 && <button className={CSS['review-btn']} onClick={onLoadReviews}>MORE REVIEWS</button>}
    <button className={CSS['review-btn']} onClick={onAddReview}>ADD A REVIEW<FontAwesomeIcon icon='plus'/></button>
  </div>
);

const mapStateToProps = (state) => ({
  remainingReviews: state.remainingReviews,
});

export default connect(mapStateToProps)(ReviewButtons);
