/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './productReviews.module.css';

class ReviewButtons extends React.Component {
  render() {
    return (
      <div>
        {this.props.reviews.length > 2 && <button className={CSS['review-btn']} onClick={() => {}}>MORE REVIEWS</button>}
        <button className={CSS['review-btn']} onClick={this.props.onAddReview}>ADD A REVIEW<FontAwesomeIcon icon='plus'/></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(ReviewButtons);
