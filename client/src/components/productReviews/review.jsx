/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './productReviews.module.css';
import StarRating from '../common/starRating.jsx';

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
    return (
      <>
      <div className={CSS.review}>
        <div className={CSS['review-header']}>
          <StarRating />
          <div>{`${this.props.review.reviewer_name}, ${this.props.review.date.split('T')[0]}`}</div>
        </div>
        <div className={CSS['review-summary']}>
          {this.props.review.summary}
        </div>
        <div className={CSS['review-body']}>
          <div>{this.state.reviewBody}</div>
          {!this.state.bodyShown && <div style={{
            fontStyle: 'italic', color: '#92a4b3', textDecoration: 'underline', cursor: 'pointer',
          }} onClick={this.loadBody}>Show More</div>}
        </div>
        {this.props.review.recommend && <div className={CSS['review-recommendation']}><FontAwesomeIcon icon='check' style={{ color: '#b1d2b0ff', marginRight: '10px' }}/>I recommend this product!</div>}
        {this.props.review.response && <div className={CSS['review-response']}>Response from seller: {this.props.review.response}</div>}
        <div className={CSS['review-photo-container']}>
          {this.props.review.photos.map((photo) => <img src={photo.url} alt='review-photo' key={photo.id} className={CSS['review-photo']} onClick={this.expandPhoto}/>)}
        </div>
        <div className={CSS['review-helpful-rating']}>
          <div className={CSS['review-helpful-rating-sub']}>Helpful?<a href=''>Yes</a>({this.props.review.helpfulness})</div>
          <div className={`${CSS['review-helpful-rating-sub']} ${CSS['review-division']}`}>{'|'}</div>
          <div><a href=''>Report</a></div>
        </div>
      </div>
      {this.state.expandedPhoto
        && <PhotoModal imgUrl={this.state.expandedPhoto.toString()} closePhoto={this.closePhoto} />}
      </>
    );
  }
}

export default Review;
