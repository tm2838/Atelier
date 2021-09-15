/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

const ReviewModal = (props) => {
  console.log(props.product); //eslint-disable-line
  return (
    <div className={CSS['review-modal']}>
      <h3> Write Your Review</h3>
      <h4> About the {`${props.product}`}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(ReviewModal);
