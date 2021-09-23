/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../ratingsAndReviews.module.css';
import StarRating from '../../common/starRating.jsx';

const PhotoModal = ({ imgUrl, closePhoto }) => (
  <div className={CSS['review-photo-modal']}>
    <img src={imgUrl} alt='review-photo' className={CSS['review-photo-expanded']}/>
    <FontAwesomeIcon icon='times' onClick={closePhoto} style={{ color: '#b1d2b0ff' }}/>
  </div>
);

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyShown: false,
      reviewBody: `${this.props.review.body.substring(0, 250)}...`,
      expandedPhoto: '',
    };
    this.loadBody = this.loadBody.bind(this);
    this.expandPhoto = this.expandPhoto.bind(this);
    this.closePhoto = this.closePhoto.bind(this);
  }

  loadBody() {
    this.setState({ bodyShown: true, reviewBody: this.props.review.body });
  }

  expandPhoto(e) {
    this.setState({ expandedPhoto: e.target.src });
  }

  closePhoto() {
    this.setState({ expandedPhoto: '' });
  }

  render() {
    const { review } = this.props;
    const { bodyShown, reviewBody, expandedPhoto } = this.state;
    return (
      <>
      <div className={CSS.review}>
        <div className={CSS['review-header']}>
          <StarRating />
          <div>{`${review.reviewer_name}, ${review.date.split('T')[0]}`}</div>
        </div>

        <div className={CSS['review-summary']}>
          {review.summary}
        </div>

        <div className={CSS['review-body']}>
          <div>{reviewBody}</div>
          {!bodyShown
            && <div style={{
              fontStyle: 'italic', color: 'black', textDecoration: 'underline', cursor: 'pointer',
            }} onClick={this.loadBody}>Show More</div>}
        </div>

        {review.recommend
          && <div className={CSS['review-recommendation']}>
              <FontAwesomeIcon icon='check' style={{ color: '#b1d2b0ff', marginRight: '10px' }}/>
              I recommend this product!
          </div>}

        {review.response
          && <div className={CSS['review-response']}>Response from seller: {review.response}</div>}

        <div className={CSS['review-photo-container']}>
          {review.photos.map(
            (photo) => <img src={photo.url} alt='review-photo' key={photo.id} className={CSS['review-photo']} onClick={this.expandPhoto}/>,
          )}
        </div>

        <div className={CSS['review-helpful-rating']}>
          <div className={CSS['review-helpful-rating-sub']}>Helpful?<a href=''>Yes</a>({review.helpfulness})</div>
          <div className={`${CSS['review-helpful-rating-sub']} ${CSS['review-division']}`}>{'|'}</div>
          <div><a href=''>Report</a></div>
        </div>
      </div>

      {expandedPhoto
        && <PhotoModal imgUrl={expandedPhoto.toString()} closePhoto={this.closePhoto} />}
      </>
    );
  }
}

export default Review;
