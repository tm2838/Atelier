/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../ratingsAndReviews.module.css';

const ProductBreakdownBar = ({ characteristic, options, point }) => {
  console.log(characteristic, point)
  let marginLeft = (parseInt(point, 10).toFixed(2) / 5) * 100;
  if (marginLeft === 100) {
    marginLeft = 93;
  }
  return (
  <>
    <div className={CSS['product-breakdown-characteristic']}>{characteristic}:</div>
    <div className={CSS['product-breakdown-container']}>
      {options.map((option) => <div key={option} style={{ width: '90%', height: '10px', backgroundColor: '#dcdcdc' }} className={CSS[`product-breakdown-option-${options.indexOf(option)}`]}/>)}
      <div className={CSS['product-breakdown-indicator-0']}>{options[0]}</div>
      <div className={CSS['product-breakdown-indicator-1']}>{options[4]}</div>
      <FontAwesomeIcon icon='caret-down' size='2x' className={CSS['product-breakdown-caret-down']} style={{
        marginLeft: `${marginLeft}%`,
      }}/>
    </div>
</>
)};

export default ProductBreakdownBar;
