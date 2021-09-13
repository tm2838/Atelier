/* eslint-disable react/prop-types */
import React from 'react';
import CSS from './productReviews.module.css';

class Review extends React.Component {
  render() {
    return (
      <div className={CSS.review}>
        <div className={CSS['review-header']}>
          <div className='star-review'>{'star review'}</div>
          <div>{`${this.props.review.reviewer_name}, ${this.props.review.date.split('T')[0]}`}</div>
        </div>
        <div className={CSS['review-summary']}>
          {this.props.review.summary}
        </div>
        <div className={CSS['review-body']}>
          {this.props.review.body}
        </div>
        {this.props.review.recommend && <div className='review-recommendation'>I recommend this product!</div>}
        {this.props.review.response && <div className={CSS['review-response']}>{this.props.review.response}</div>}
        <div className={CSS['review-helpful-rating']}>
          <div className={CSS['review-helpful-rating-sub']}>Helpful?<a href=''>Yes</a>({this.props.review.helpfulness})</div>
          <div className={`${CSS['review-helpful-rating-sub']} ${CSS['review-division']}`}>{'|'}</div>
          <div><a href=''>Report</a></div>
        </div>
      </div>
    );
  }
}

export default Review;
