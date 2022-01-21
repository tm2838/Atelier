/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { changeLoadedReviews, changeRemainingReviews } from '../../../actions/ratingsAndReviews/changeReviews';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';
import SortingDropdown from './sortingDropdown.jsx';
import '../ratingsAndReviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.onLoadReviews = this.onLoadReviews.bind(this);
  }

  onLoadReviews() {
    const loadedReviews = this.props.loadedReviews.concat(this.props.remainingReviews.slice(0, 2));
    const remainingReviews = this.props.remainingReviews.slice(2);
    this.props.handleLoadReviews(loadedReviews, remainingReviews);
  }

  render() {
    return (
      <div className='reviews-container'>
        <SortingDropdown />

        {this.props.loadedReviews.length > 0 && <ReviewsList />}

        <ReviewButtons
          onLoadReviews={this.onLoadReviews}
          onAddReview={this.props.onAddReview}
        />
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
  handleLoadReviews: (loadedReviews, remainingReviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
