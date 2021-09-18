/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

const ProductBreakdown = (props) => (
    <div className={CSS['product-breakdown']}>
      {props.reviewMeta.characteristics && Object.keys(props.reviewMeta.characteristics)
        .map((key) => <div key={key}>{key}: ----*----</div>)}
    </div>
);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(ProductBreakdown);
