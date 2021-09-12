import React from 'react';
import { connect } from 'react-redux';

const buttonStyle = {
  backgroundColor: '#dbe7f7ff',
  border: 'none',
  padding: '10px 20px',
  textAlign: 'center',
  marginRight: '5px',
  cursor: 'pointer'
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

const mapStateToProps = (state, reviews) => {
  return {
    reviews: state.reviews
  }
};

export default connect(mapStateToProps)(ReviewButtons);
