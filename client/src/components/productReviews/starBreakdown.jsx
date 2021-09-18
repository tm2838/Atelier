/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

const StarBreakdown = (props) => (
    <>
    { props.reviewMeta.ratings && <div className={CSS['star-breakdown']}>
      <div>5 Stars:  ------- {props.reviewMeta.ratings['5'] || 0} reviews</div>
      <div>4 Stars: ------- {props.reviewMeta.ratings['4'] || 0} reviews</div>
      <div>3 Stars: ------- {props.reviewMeta.ratings['3'] || 0} reviews</div>
      <div>2 Stars: ------- {props.reviewMeta.ratings['2'] || 0} reviews</div>
      <div>1 Star: ------- {props.reviewMeta.ratings['1'] || 0} reviews</div>
    </div>}
    </>

);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(StarBreakdown);
