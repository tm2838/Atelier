/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import fetchReviews from '../../actions/fetchReviews';
import { changeLoadedReviews, changeRemainingReviews } from '../../actions/productReviews/changeReviews';

import Ratings from './ratings.jsx';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';
import ReviewModal from './reviewModal.jsx';
import SortingDropdown from './sortingDropdown.jsx';
import CSS from './productReviews.module.css';

class ProductReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddReviewModalOpen: false,
    };
    this.onLoadReviews = this.onLoadReviews.bind(this);
  }

  componentDidMount() {
    this.props.handleFetchReviews();
  }

  onLoadReviews() {
    const loadedReviews = this.props.loadedReviews.concat(this.props.remainingReviews.slice(0, 2));
    const remainingReviews = this.props.remainingReviews.slice(2);
    this.props.handleLoadReviews(loadedReviews, remainingReviews);
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
            {this.props.loadedReviews.length > 0 && <ReviewsList />}
            <ReviewButtons
              onLoadReviews={this.onLoadReviews}
              onAddReview={() => { this.setState({ isAddReviewModalOpen: true }); }}
            />
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

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  loadedReviews: state.loadedReviews,
  remainingReviews: state.remainingReviews,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchReviews: () => {
    dispatch(fetchReviews());
  },
  handleLoadReviews: (loadedReviews, remainingReviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);
