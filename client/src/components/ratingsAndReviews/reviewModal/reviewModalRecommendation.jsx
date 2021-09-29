/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';

class ReviewRecommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: '',
    };
    this.onRecommendation = this.onRecommendation.bind(this);
  }

  onRecommendation(e) {
    if (e.target.value === this.state.recommend) {
      this.setState({ recommend: '' });
    } else {
      this.setState({ recommend: e.target.value });
    }
    this.props.handleRecommendation(e.target.value);
  }

  render() {
    const { violations } = this.props;
    const violated = violations.includes('recommend');
    const violationStyle = violated ? { color: 'red' } : {};

    return (
      <div className={CSS['review-modal-input']}>
        <div required><b>Do you recommend this product? * </b></div>
        {violated && <div style={violationStyle}>You must enter the following</div>}
        <input type='radio' value='yes' name='recommend' id='recommend-yes' onChange={this.onRecommendation} />  Yes
        <input type='radio' value='no' name='recommend' id='recommend-no' onChange={this.onRecommendation} />  No
      </div>
    );
  }
}

export default ReviewRecommendation;
