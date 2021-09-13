/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

class ReviewButtons extends React.Component {
  render() {
    return (
      <div>
        {this.props.reviews.length > 2 && <button className={CSS['review-btn']}>MORE REVIEWS</button>}
        <button className={CSS['review-btn']}>ADD A REVIEW</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(ReviewButtons);
