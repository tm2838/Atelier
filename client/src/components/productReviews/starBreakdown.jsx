/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

const StarBreakdown = (props) => {
  console.log(props.reviewMeta); //eslint-disable-line
  return (
    <div className={CSS['star-breakdown']}>
      <div>1 Star:  ------- # of reviews</div>
      <div>2 Stars: ------- # of reviews</div>
      <div>3 Stars: ------- # of reviews</div>
      <div>4 Stars: ------- # of reviews</div>
      <div>5 Stars: ------- # of reviews</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(StarBreakdown);
