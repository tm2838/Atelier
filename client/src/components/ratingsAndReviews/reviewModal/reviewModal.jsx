/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import CharRating from './reviewModalCharRating.jsx';
import StarRating from '../../common/starRating.jsx';
import validateNewReview from '../../../helpers/validateNewReview';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      characters: 0,
      valid: true,
      violations: [],
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleReviewSummary = this.handleReviewSummary.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecommendation = this.handleRecommendation.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);
    this.handleReviewCharacteristics = this.handleReviewCharacteristics.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
  }

  handleStarRating(e) {
    let classes;
    if (e.target.getAttribute('class')) {
      classes = e.target.getAttribute('class').split(' ');
    } else {
      classes = e.target.parentNode.getAttribute('class').split(' ');
    }
    const rating = classes[classes.length - 1];
    this.setState({ rating });
  }

  handleReviewSummary(e) {
    this.setState({ summary: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value, characters: e.target.value.length });
  }

  handleRecommendation(e) {
    if (e.target.value === this.state.recommend) {
      this.setState({ recommend: '' });
    } else {
      this.setState({ recommend: e.target.value });
    }
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleUploadPhoto(e) {
    e.preventDefault();
    this.setState({
      photos: [...this.state.photos, URL.createObjectURL(e.target.files[0])],
    });
  }

  handleDeletePhoto(e) {
    const photoToDelete = this.state.photos.indexOf(e.target.src);
    const remainingPhotos = this.state.photos.slice();
    remainingPhotos.splice(photoToDelete, 1);
    this.setState({ photos: remainingPhotos });
  }

  handleReviewCharacteristics(e) {
    const { reviewMeta: { characteristics } } = this.props;
    const newCharacteristics = {};
    if (characteristics[e.target.name]) {
      newCharacteristics[characteristics[e.target.name].id] = parseInt(e.target.className.split(' ')[1], 10);
    } else {
      let currentIdMax = 0;
      const charsArr = Object.values(characteristics);
      for (let i = 0; i < charsArr.length; i += 1) {
        const currentChar = charsArr[i];
        if (currentChar.id > currentIdMax) {
          currentIdMax = currentChar.id;
        }
      }
      newCharacteristics[currentIdMax + 1] = parseInt(e.target.className.split(' ')[1], 10);
    }
    this.setState({ characteristics: { ...this.state.characteristics, ...newCharacteristics } });
  }

  handlePostReview() {
    const {
      rating, summary, body, recommend, name, email, photos, characteristics,
    } = this.state;
    const newReview = {
      rating: parseInt(rating, 10),
      summary,
      body,
      name,
      email,
      photos,
      characteristics,
    };
    if (recommend !== '') {
      newReview.recommend = recommend === 'yes';
    }

    const [valid, violations] = validateNewReview(newReview);
    this.setState({ valid, violations });
  }

  render() {
    const {
      characters, rating, violations,
    } = this.state;
    const { product, onModalClose } = this.props;
    const starRatingOptions = {
      1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great',
    };
    const ratingViolation = violations.includes('rating') ? 'rating-violation' : '';
    const bodyViolation = violations.includes('body') ? 'body-violation' : '';
    const recommendViolation = violations.includes('recommend') ? 'recommend-violation' : '';
    // const characteristicsViolation =
    // violations.includes('characteristics') ? 'characteristics-violation' : '';
    const nameViolation = violations.includes('name') ? 'name-violation' : '';
    const emailViolation = violations.includes('email') ? 'email-violation' : '';
    return (
      <div className={CSS['review-modal']}>
        <div className={CSS['review-modal-content']}>
          <h2 className={CSS['review-modal-title']}> Write Your Review</h2>
          <h4 className={CSS['review-modal-subtitle']}> About the {`${product.name}`}</h4>
          <form onSubmit={this.handlePostReview}>
            <>
              {/*
              {!valid && <div style={{ marginBottom: '10px' }}>You must enter the following:</div>}
              */}
              <div className={`${CSS['review-modal-star-rating']} ${ratingViolation}`}>
                <div required><b>Overall rating * </b></div>
                <div style={{
                  display: 'flex', color: '#92a4b3', fontStyle: 'italic',
                }}>
                <StarRating rating={rating} onClick={this.handleStarRating}/>
                {starRatingOptions[rating]}
                </div>
              </div>

              <div className={`${CSS['review-modal-input']} ${recommendViolation}`}>
                <div required><b>Do you recommend this product? * </b></div>
                <input type='radio' value='yes' name='recommend' id='recommend-yes' onChange={this.handleRecommendation} />  Yes
                <input type='radio' value='no' name='recommend' id='recommend-no' onChange={this.handleRecommendation} />  No
              </div>

              <div className={CSS['review-modal-input']}>
                <div required><b>Characteristics * </b></div>
                <CharRating
                  characteristic='Size'
                  options={['A size too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'A size too wide']}
                  handleChange={this.handleReviewCharacteristics}
                />
                <CharRating
                  characteristic='Width'
                  options={['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']}
                  handleChange={this.handleReviewCharacteristics}
                />
                <CharRating
                  characteristic='Comfort'
                  options={['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect']}
                  handleChange={this.handleReviewCharacteristics}
                />
                <CharRating
                  characteristic='Quality'
                  options={['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']}
                  handleChange={this.handleReviewCharacteristics}
                />
                <CharRating
                  characteristic='Length'
                  options={['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']}
                  handleChange={this.handleReviewCharacteristics}
                />
                <CharRating
                  characteristic='Fit'
                  options={['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}
                  handleChange={this.handleReviewCharacteristics}
                />
              </div>

              <div className={CSS['review-modal-input']}>
                <div><b>Review Summary: </b></div>
                <textarea
                  id='review-summary'
                  placeholder='Example: Best purchase ever!'
                  maxLength='60'
                  className={CSS['review-modal-textbox']}
                  onChange={this.handleReviewSummary}
                />
              </div>

              <div className={CSS['review-modal-input']}>
                <div><b>Review Body * </b></div>
                <textarea
                  id='review-body'
                  placeholder='Why did you like the product or not?'
                  maxLength='1000'
                  minLength='50'
                  required
                  className={`${CSS['review-modal-textbox-body']} ${bodyViolation}`}
                  onChange={this.handleBodyChange}
                />
                <div><i>{characters < 50 ? `Minimum required characters left: ${50 - characters}` : 'Minimum Reached'}</i></div>
              </div>

              <div>
                <div><b>Upload your photos (Max: 5)</b></div>
                <input
                  type='file'
                  id='review-photo'
                  name='filename'
                  onChange={this.handleUploadPhoto}
                  disabled={this.state.photos.length === 5}
                  style={{ marginBottom: '10px' }}
                />
              </div>

              {this.state.photos.map(
                (url) => <img src={url} alt='uploaded photo' key={url} className={CSS['review-photo']} onClick={this.handleDeletePhoto} />,
              )}

              <div className={`${CSS['review-modal-input']} ${nameViolation}`}>
                <div><b>What is your nick name * </b></div>
                <textarea
                  id='username'
                  placeholder='Example: jackson11'
                  maxLength='60'
                  required
                  className={CSS['review-modal-textbox']}
                  onChange={this.handleName}
                />
                <div><i>For privacy reasons, do not use your full name or email address</i></div>
              </div>

              <div className={`${CSS['review-modal-input']} ${emailViolation}`}>
                <div><b>Your email * </b></div>
                  <textarea
                    id='email'
                    placeholder='Example: jackson11@email.com'
                    maxLength='60'
                    required
                    className={CSS['review-modal-textbox']}
                    onChange={this.handleEmail}
                  />
                  <div><i>For authentication reasons, you will not be emailed</i></div>
              </div>
            </>

            <div>
              <button className={CSS['review-btn']} onClick={this.handlePostReview}>Submit Review</button>
              <button className={CSS['review-btn']} onClick={onModalClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(ReviewModal);
