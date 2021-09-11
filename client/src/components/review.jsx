import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div style={{borderBottom: '2px solid #dbe7f7ff', marginBottom: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>{'star review'}</div>
          <div>{`${this.props.review.reviewer_name}, ${this.props.review.date.split('T')[0]}`}</div>
        </div>
        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
          {this.props.review.summary}
        </div>
        <div>
          {this.props.review.body}
        </div>
        {this.props.review.recommend && <div>I recommend this product!</div>}
        {this.props.review.response && <div style={{backgroundColor: 'lightblue'}}>{this.props.review.response}</div>}
        <div style={{display: 'flex', justifyContent: 'flex-start', marginRight: '5px'}}>
          <div>Helpful?<a>Yes</a>({this.props.review.helpfulness})</div>
          <div>{'|'}</div>
          <div><a>Report</a></div>
        </div>
      </div>
    )
  }
}

export default Review;