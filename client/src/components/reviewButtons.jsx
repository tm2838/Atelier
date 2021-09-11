import React from 'react';

const buttonStyle = {
  backgroundColor: '#dbe7f7ff'
}
class ReviewButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.reviews.length > 2 && <button style={buttonStyle}>MORE REVIEWS</button>}
        <button style={buttonStyle}>ADD A REVIEW</button>
      </div>
    )
  }
}

export default ReviewButtons;