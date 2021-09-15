/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import fetchReviews from '../../actions/fetchReviews';

import Ratings from './ratings.jsx';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';
import ReviewModal from './reviewModal.jsx';
import SortingDropdown from './sortingDropdown.jsx';
import CSS from './productReviews.module.css';

class ProductReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      isAddReviewModalOpen: false,
    };
  }

  componentDidMount() {
    this.props.handleFetchReviews();
  }

  render() {
    return (
      <>
        <h3 style={{ marginLeft: '180px' }}>{'RATINGS & REVIEWS'}</h3>
        <div className={CSS['reviews-container']}>
          <div>{''}</div>
          <Ratings />
          <div>
            <SortingDropdown />
            <ReviewsList />
            <ReviewButtons onAddReview={
              () => { this.setState({ isAddReviewModalOpen: true }); }}/>
          </div>
          <div>{''}</div>
        </div>
        {
          this.state.isAddReviewModalOpen
            && <ReviewModal onModalClose={
            () => { this.setState({ isAddReviewModalOpen: false }); }}/>
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFetchReviews: () => {
    dispatch(fetchReviews());
  },
});

export default connect(null, mapDispatchToProps)(ProductReviews);
