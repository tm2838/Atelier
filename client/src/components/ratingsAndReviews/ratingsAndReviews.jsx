/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import fetchReviews from '../../actions/fetchReviews';
import { changeLoadedReviews, changeRemainingReviews } from '../../actions/ratingsAndReviews/changeReviews';

import Ratings from './ratings/ratings.jsx';
import ReviewsList from './reviews/reviewsList.jsx';
import ReviewButtons from './reviews/reviewButtons.jsx';
import ReviewModal from './reviewModal/reviewModal.jsx';
import SortingDropdown from './reviews/sortingDropdown.jsx';
import CSS from './ratingsAndReviews.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddReviewModalOpen: false,
    };
    this.onLoadReviews = this.onLoadReviews.bind(this);
  }

  componentDidMount() {
    this.props.handleFetchReviews(this.props.productId);
  }

  onLoadReviews() {
    const loadedReviews = this.props.loadedReviews.concat(this.props.remainingReviews.slice(0, 2));
    const remainingReviews = this.props.remainingReviews.slice(2);
    this.props.handleLoadReviews(loadedReviews, remainingReviews);
  }

  render() {
    return (
      <div id='ratings-and-reviews'>
        <div className={CSS['ratings-and-reviews']}>
          <a name='ratings-and-reviews'><h3 className={CSS['ratings-and-reviews-title']}>{'RATINGS & REVIEWS'}</h3></a>
          <Ratings />

          <div className={CSS['reviews-container']}>
            <SortingDropdown />

            {this.props.loadedReviews.length > 0 && <ReviewsList />}

            <ReviewButtons
              onLoadReviews={this.onLoadReviews}
              onAddReview={() => { this.setState({ isAddReviewModalOpen: true }); }}
            />
          </div>

        </div>
        {
          this.state.isAddReviewModalOpen
            && <ReviewModal onModalClose={
            () => { this.setState({ isAddReviewModalOpen: false }); }}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  reviews: state.reviews,
  loadedReviews: state.loadedReviews,
  remainingReviews: state.remainingReviews,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchReviews: (productId) => {
    dispatch(fetchReviews(productId));
  },
  handleLoadReviews: (loadedReviews, remainingReviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
