/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from './ratings/ratingsContainer.jsx';
import Reviews from './reviews/reviewsContainer.jsx';
import ReviewModal from './reviewModal/reviewModal.jsx';
import './ratingsAndReviews.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddReviewModalOpen: false,
    };
  }

  render() {
    return (
      <div id='ratings-and-reviews'>
        <h3 className={'ratings-and-reviews-title'}>{'RATINGS & REVIEWS'}</h3>

        <div className={'ratings-and-reviews'}>
          <Ratings />
          <Reviews onAddReview={() => { this.setState({ isAddReviewModalOpen: true }); }}/>
        </div>

        {
          this.state.isAddReviewModalOpen
            && <ReviewModal onModalClose={
            (e) => { e.preventDefault(); this.setState({ isAddReviewModalOpen: false }); }}/>
        }
      </div>
    );
  }
}

export default RatingsAndReviews;
