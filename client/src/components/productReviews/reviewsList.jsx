/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Review from './review.jsx';

class ReviewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.loadedReviews.map(
          (review) => <Review key={review.review_id} review={review}/>,
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loadedReviews: state.loadedReviews,
});

export default connect(mapStateToProps)(ReviewsList);
