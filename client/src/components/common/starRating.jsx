import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import CSS from './starRating.module.css';

const StarRating = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSolidStar} className={CSS['star-rating']} />
      <FontAwesomeIcon icon={faSolidStar} className={CSS['star-rating']} />
      <FontAwesomeIcon icon={faSolidStar} className={CSS['star-rating']} />
      <FontAwesomeIcon icon={faStarHalfAlt} className={CSS['star-rating']} />
      <FontAwesomeIcon icon={faStar} className={CSS['star-rating']} />
    </div>
  )
}

export default StarRating;