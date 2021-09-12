import React from 'react';
import { connect } from 'react-redux';

import fetchReviews from '../../actions/fetchReviews';

import Ratings from './ratings.jsx';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';

import configureStore from '../../store.js';


class ProductReviews extends React.Component {
  componentDidMount() {
    this.props.handleFetchReviews();
  }

  render() {
    return (
      <>
      <h3>{'RATINGS & REVIEWS'}</h3>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr 1fr'}}>
        <Ratings />
        <div>
          <ReviewsList />
          <ReviewButtons />
        </div>
      </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { handleFetchReviews: () => {
    dispatch(fetchReviews());
  }};
};

export default connect(null, mapDispatchToProps)(ProductReviews);

