import React from 'react';
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

export default ReviewsList;