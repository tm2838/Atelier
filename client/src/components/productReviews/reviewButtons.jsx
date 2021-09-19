/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './productReviews.module.css';

class ReviewButtons extends React.Component {
  render() {
    return (
      <div>
        {this.props.remainingReviews.length > 0 && <button className={CSS['review-btn']} onClick={this.props.onLoadReviews}>MORE REVIEWS</button>}
        <button className={CSS['review-btn']} onClick={this.props.onAddReview}>ADD A REVIEW<FontAwesomeIcon icon='plus'/></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  remainingReviews: state.remainingReviews,
});

export default connect(mapStateToProps)(ReviewButtons);
