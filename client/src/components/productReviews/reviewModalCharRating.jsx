/* eslint-disable react/prop-types */
import React from 'react';
import CSS from './productReviews.module.css';

const CharRating = ({ characteristic, options }) => (
  <>
    <div className={CSS['char-option-chosen']}>Current selection: {'None selected'}</div>
    <div className={CSS['char-rating-container']}>
      <div className={CSS['char-rating-title']}>{characteristic}:</div>
      <input type='radio' value={`${options[0]}`} name={characteristic} className={CSS['char-rating-option-0']}/>
      <input type='radio' value={`${options[1]}`} name={characteristic} className={CSS['char-rating-option-1']}/>
      <input type='radio' value={`${options[2]}`} name={characteristic} className={CSS['char-rating-option-2']}/>
      <input type='radio' value={`${options[3]}`} name={characteristic} className={CSS['char-rating-option-3']}/>
      <input type='radio' value={`${options[4]}`} name={characteristic} className={CSS['char-rating-option-4']}/>
      <div className={CSS['char-option-indicator-0']}>{options[0]}</div>
      <div className={CSS['char-option-indicator-1']}>{options[4]}</div>
    </div>
  </>
);

export default CharRating;
