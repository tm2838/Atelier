import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './starRating.module.css';

const StarRating = () => {
  return (
    <div>
      <FontAwesomeIcon icon='star' className={CSS['star-rating']} />
      <FontAwesomeIcon icon='star' className={CSS['star-rating']} />
      <FontAwesomeIcon icon='star' className={CSS['star-rating']} />
      <FontAwesomeIcon icon='star-half-alt' className={CSS['star-rating']} />
      <FontAwesomeIcon icon={['far', 'star']} className={CSS['star-rating']} />
    </div>
  )
}

export default StarRating;