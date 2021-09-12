import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div className='review' style={{borderBottom: '2px solid #dbe7f7ff', marginBottom: '10px'}}>
        <div className='review-header' style={{display: 'flex', justifyContent: 'space-between'}}>
          <div className='star-review'>{'star review'}</div>
          <div>{`${this.props.review.reviewer_name}, ${this.props.review.date.split('T')[0]}`}</div>
        </div>
        <div className='review-summary' style={{fontWeight: 'bold', fontSize: '20px'}}>
          {this.props.review.summary}
        </div>
        <div className='review-body'>
          {this.props.review.body}
        </div>
        {this.props.review.recommend && <div className='review-recommendation'>I recommend this product!</div>}
        {this.props.review.response && <div  className='review-response' style={{backgroundColor: 'lightblue'}}>{this.props.review.response}</div>}
        <div className='review-helpful-rating' style={{display: 'flex', justifyContent: 'flex-start'}}>
          <div style={{marginRight: '5px'}}>Helpful?<a>Yes</a>({this.props.review.helpfulness})</div>
          <div style={{marginRight: '5px'}}>{'|'}</div>
          <div><a>Report</a></div>
        </div>
      </div>
    )
  }
}

export default Review;