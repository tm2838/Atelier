/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';

import Ratings from './ratings.jsx';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';
import CSS from './productReviews.module.css';

class ProductReviews extends React.Component {
  render() {
    return (
      <>
        <h3>{'RATINGS & REVIEWS'}</h3>
        <div className={CSS['reviews-container']}>
          <div>{''}</div>
          <Ratings />
          <div>
            <ReviewsList />
            <ReviewButtons />
          </div>
          <div>{''}</div>
        </div>
      </>
    );
  }
}

export default ProductReviews;
