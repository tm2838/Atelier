/* eslint-disable react/prop-types */
import React from 'react';
import '../ratingsAndReviews.css';
import CharRating from './reviewModalCharRating.jsx';

class ReviewModalCharRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: {},
    };
    this.onReviewCharacteristics = this.onReviewCharacteristics.bind(this);
  }

  onReviewCharacteristics(e) {
    const { characteristics, handleReviewCharacteristics } = this.props;
    const newCharacteristics = {};
    newCharacteristics[characteristics[e.target.name].id] = parseInt(e.target.className.split(' ')[1], 10) + 1;

    const updatedReviewCharacteristics = { ...this.state.characteristics, ...newCharacteristics };
    this.setState({ characteristics: updatedReviewCharacteristics });
    handleReviewCharacteristics(updatedReviewCharacteristics);
  }

  render() {
    const { characteristics, violations } = this.props;
    const charRatingOptions = {
      Size: ['A size too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
    };
    const violated = violations.includes('characteristics');
    const violationStyle = violated ? { color: 'red' } : {};
    return (
      <>
      <div className='review-modal-input'>
        <div required><b>Characteristics * </b></div>
        {violated && <div style={violationStyle}>You must enter the following</div>}
        {Object.keys(characteristics).map(
          (char) => <CharRating
          key={char}
          characteristic={char}
          options={charRatingOptions[char]}
          handleChange={this.onReviewCharacteristics}/>,
        )}
      </div>
      </>
    );
  }
}

export default ReviewModalCharRatings;
