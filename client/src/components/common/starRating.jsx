/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './commonUI.module.css';

const StarRating = ({ rating, onClick = () => {} }) => {
  const ratingInt = parseInt(rating, 10);
  let ratingFloat = rating - ratingInt;
  if (ratingFloat > 0 && ratingFloat < 0.5) {
    ratingFloat = 0.4;
  } else if (ratingFloat > 0.5 && ratingFloat < 1) {
    ratingFloat = 0.6;
  }

  const ratingToRender = ratingInt + ratingFloat;

  return (
  <div style={{ position: 'relative', width: '100px' }} onClick={onClick}>
    <div style={{ position: 'absolute', display: 'flex', width: '90px' }}>
      <FontAwesomeIcon icon={['far', 'star']} className={`${CSS['star-rating']} 1`}/>
      <FontAwesomeIcon icon={['far', 'star']} className={`${CSS['star-rating']} 2`}/>
      <FontAwesomeIcon icon={['far', 'star']} className={`${CSS['star-rating']} 3`}/>
      <FontAwesomeIcon icon={['far', 'star']} className={`${CSS['star-rating']} 4`}/>
      <FontAwesomeIcon icon={['far', 'star']} className={`${CSS['star-rating']} 5`}/>
    </div>
    <div style={{
      position: 'absolute', display: 'flex', width: `${(ratingToRender * 90) / 5}px`, overflow: 'hidden',
    }}>
      <FontAwesomeIcon icon='star' className={`${CSS['star-rating']} 1`} />
      <FontAwesomeIcon icon='star' className={`${CSS['star-rating']} 2`} />
      <FontAwesomeIcon icon='star' className={`${CSS['star-rating']} 3`} />
      <FontAwesomeIcon icon='star' className={`${CSS['star-rating']} 4`} />
      <FontAwesomeIcon icon='star' className={`${CSS['star-rating']} 5`} />
    </div>
  </div>
  );
};
export default StarRating;
