import React from 'react';
import { connect } from 'react-redux';

import Review from './review.jsx';

class ReviewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.reviews.slice(0, 2).map((review) => <Review key={review.review_id} review={review}/>)}
      </div>
    )
  }
}
const mapStateToProps = (state, reviews) => {
  return {
    reviews: state.reviews
  }
};

export default connect(mapStateToProps)(ReviewsList);
