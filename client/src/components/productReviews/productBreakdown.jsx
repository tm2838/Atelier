/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

const ProductBreakdown = (props) => {
  console.log(props.reviewMeta); //eslint-disable-line
  return (
    <div className={CSS['product-breakdown']}>
      <div>Size:    ---*---- </div>
      <div>Width:   ------*- </div>
      <div>Comfort: -*------ </div>
      <div>Length:  ------*- </div>
      <div>Fit:     -*------ </div>
    </div>
  );
};

const mapStateToProps = (state) => state.reviewMeta;

export default connect(mapStateToProps)(ProductBreakdown);
