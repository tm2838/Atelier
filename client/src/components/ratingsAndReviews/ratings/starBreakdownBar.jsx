/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';

const StarBreakdownBar = ({ barStyle = { width: '50%' } }) => (
  <div className={CSS['star-breakdown-bar-container']}>
    <div className={CSS['star-breakdown-bar']} style={{ ...barStyle, height: '10px', backgroundColor: '#b1d2b0ff' }}></div>
  </div>
);

export default StarBreakdownBar;
