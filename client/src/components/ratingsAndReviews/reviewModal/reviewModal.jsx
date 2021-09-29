/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import validateNewReview from '../../../helpers/validateNewReview';
import submitReview from '../../../helpers/submitReview';
import fetchReviews from '../../../actions/fetchReviews';

import ReviewOverallRating from './reviewModalOverallRating.jsx';
import ReviewRecommendation from './reviewModalRecommendation.jsx';
import ReviewCharRatings from './reviewModalCharRatings.jsx';
import ReviewContent from './reviewModalContent.jsx';
import ReviewUserInfo from './reviewModalUserInfo.jsx';

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
      valid: true,
      violations: [],
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleReviewSummary = this.handleReviewSummary.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecommendation = this.handleRecommendation.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUpdatePhotos = this.handleUpdatePhotos.bind(this);
    this.handleReviewCharacteristics = this.handleReviewCharacteristics.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
  }

  handleStarRating(rating) {
    this.setState({ rating });
  }

  handleRecommendation(recommend) {
    this.setState({ recommend });
  }

  handleReviewCharacteristics(characteristics) {
    this.setState({ characteristics });
  }

  handleReviewSummary(summary) {
    this.setState({ summary });
  }

  handleBodyChange(body) {
    this.setState({ body });
  }

  handleUpdatePhotos(photos) {
    this.setState({
      photos,
    });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePostReview() {
    const {
      rating, summary, body, recommend, name, email, photos, characteristics,
    } = this.state;
    const { product, onModalClose, reviewMeta } = this.props;
    const newReview = {
      product_id: product.id,
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

    const [valid, violations] = validateNewReview(
      newReview,
      Object.keys(reviewMeta.characteristics),
    );
    this.setState({ valid, violations });
    if (valid) {
      submitReview(newReview)
        .then(this.props.handleFetchReviews(newReview.product_id))
        .catch((e) => console.log(e)); //eslint-disable-line
      onModalClose();
    }
  }

  render() {
    const { valid, violations } = this.state;
    const { product, onModalClose, reviewMeta: { characteristics } } = this.props;

    return (
      <div className={CSS['review-modal']}>
        <div className={CSS['review-modal-content']}>
          <h2 className={CSS['review-modal-title']}> Write Your Review</h2>
          <h4 className={CSS['review-modal-subtitle']}> About the {`${product.name}`}</h4>
          <form onSubmit={this.handlePostReview}>
            <>
              {!valid && <div style={{ marginBottom: '10px', color: 'red' }}>You must enter the following: {violations.join(', ')} </div>}

              <ReviewOverallRating
                handleStarRating={this.handleStarRating}
                violations={violations}
              />

              <ReviewRecommendation
                handleRecommendation={this.handleRecommendation}
                violations={violations}
              />

              <ReviewCharRatings
                handleReviewCharacteristics={this.handleReviewCharacteristics}
                violations={violations}
                characteristics={characteristics}
              />

              <ReviewContent
                handleReviewSummary={this.handleReviewSummary}
                handleBodyChange={this.handleBodyChange}
                handleUpdatePhotos={this.handleUpdatePhotos}
                violations={violations}
              />

              <ReviewUserInfo
                handleName={this.handleName}
                handleEmail={this.handleEmail}
                violations={violations}
              />
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

const mapDispatchToProps = (dispatch) => ({
  handleFetchReviews: (productId) => {
    dispatch(fetchReviews(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);
