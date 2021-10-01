/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';
import StarRating from '../../common/starRating.jsx';

class ReviewOverallRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.onStarRating = this.onStarRating.bind(this);
  }

  onStarRating(e) {
    let classes;
    if (e.target.getAttribute('class')) {
      classes = e.target.getAttribute('class').split(' ');
    } else {
      classes = e.target.parentNode.getAttribute('class').split(' ');
    }
    const rating = classes[classes.length - 1];
    this.setState({ rating });
    this.props.handleStarRating(rating);
  }

  render() {
    const { rating } = this.state;
    const { violations } = this.props;
    const starRatingOptions = {
      1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great',
    };

    const violated = violations.includes('rating');
    const violationStyle = violated ? { color: 'red' } : {};
    return (
      <div className={CSS['review-modal-star-rating']}>
        <div required><b>Overall rating * </b></div>
        {violated && <div style={violationStyle}>You must enter the following</div>}
        <div style={{
          display: 'flex', color: '#92a4b3', fontStyle: 'italic',
        }}>
          <StarRating rating={rating} onClick={this.onStarRating} />
          {starRatingOptions[rating]}
        </div>
      </div>
    );
  }
}

export default ReviewOverallRating;
