/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';

const ProductBreakdown = ({ reviewMeta }) => (
    <div className={CSS['product-breakdown']}>
      {reviewMeta.characteristics && Object.keys(reviewMeta.characteristics)
        .map((key) => <div key={key}>{key}: ----*----</div>)}
    </div>
);

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(ProductBreakdown);
