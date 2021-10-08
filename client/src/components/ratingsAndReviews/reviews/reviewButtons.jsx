/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../ratingsAndReviews.module.css';

const ReviewButtons = ({
  remainingReviews, onLoadReviews, onAddReview, theme,
}) => {
  const themeClass = theme === 'LIGHT' ? CSS['review-btn'] : CSS['review-btn-dark'];
  return (
    <div className={CSS['review-buttons']}>
      {remainingReviews.length > 0
        && <button className={themeClass} onClick={onLoadReviews}>MORE REVIEWS</button>}
      <button className={themeClass} onClick={onAddReview}>ADD A REVIEW{' '}<FontAwesomeIcon icon='plus'/></button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  remainingReviews: state.remainingReviews,
  theme: state.theme,
});

export default connect(mapStateToProps)(ReviewButtons);
