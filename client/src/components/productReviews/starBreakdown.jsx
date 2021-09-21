/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

import StarBreakdownBar from './starBreakdownBar.jsx';

const StarBreakdown = (props) => (
      <>
      { props.reviewMeta.ratings && <div className={CSS['star-breakdown']}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>5 Stars</div>
          <StarBreakdownBar barStyle={{ width: `${(props.reviewMeta.ratings['5'] / props.reviews.length) * 100 || 0}%` }}/>
          <div>{props.reviewMeta.ratings['5'] || 0} reviews</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>4 Stars</div>
          <StarBreakdownBar barStyle={{ width: `${(props.reviewMeta.ratings['4'] / props.reviews.length) * 100 || 0}%` }}/>
          <div>{props.reviewMeta.ratings['4'] || 0} reviews</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>3 Stars</div>
          <StarBreakdownBar barStyle={{ width: `${(props.reviewMeta.ratings['3'] / props.reviews.length) * 100 || 0}%` }}/>
          <div>{props.reviewMeta.ratings['3'] || 0} reviews</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>2 Stars</div>
          <StarBreakdownBar barStyle={{ width: `${(props.reviewMeta.ratings['2'] / props.reviews.length) * 100 || 0}%` }}/>
          <div>{props.reviewMeta.ratings['2'] || 0} reviews</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '16px' }}>1 Star {' '}</div>
          <StarBreakdownBar barStyle={{ width: `${(props.reviewMeta.ratings['1'] / props.reviews.length) * 100 || 0}%` }}/>
          <div>{props.reviewMeta.ratings['1'] || 0} reviews</div>
        </div>
      </div>}
      </>

);

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(StarBreakdown);
