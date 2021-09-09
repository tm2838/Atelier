import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid'}}>
        {this.props.review.summary}
      </div>
    )
  }
}

export default Review;