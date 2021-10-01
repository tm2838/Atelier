/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: 0,
      photos: [],
    };
    this.onReviewSummary = this.onReviewSummary.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onUploadPhoto = this.onUploadPhoto.bind(this);
    this.onDeletePhoto = this.onDeletePhoto.bind(this);
  }

  onReviewSummary(e) {
    this.props.handleReviewSummary(e.target.value);
  }

  onBodyChange(e) {
    this.props.handleBodyChange(e.target.value);
    this.setState({ characters: e.target.value.length });
  }

  onUploadPhoto(e) {
    e.preventDefault();
    const updatedPhotos = [...this.state.photos, URL.createObjectURL(e.target.files[0])];
    this.setState({
      photos: updatedPhotos,
    });
    this.props.handleUpdatePhotos(updatedPhotos);
  }

  onDeletePhoto(e) {
    const photoToDelete = this.state.photos.indexOf(e.target.src);
    const remainingPhotos = this.state.photos.slice();
    remainingPhotos.splice(photoToDelete, 1);
    this.setState({ photos: remainingPhotos });
    this.props.handleUpdatePhotos(remainingPhotos);
  }

  render() {
    const { violations } = this.props;
    const violated = violations.includes('body');
    const violationStyle = violated ? { border: '1px solid red' } : {};
    return (
      <>
        <div className={CSS['review-modal-input']}>
          <label htmlFor='review-summary'><b>Review Summary: </b></label>
          <textarea
            id='review-summary'
            data-testid='review-summary'
            placeholder='Example: Best purchase ever!'
            maxLength='60'
            className={CSS['review-modal-textbox']}
            onChange={this.onReviewSummary}
          />
        </div>

        <div className={CSS['review-modal-input']}>
          <div><b>Review Body * </b></div>
          { violated && <div style={{ color: 'red' }}>You must enter the following</div> }
          <textarea
            id='review-body'
            placeholder='Why did you like the product or not?'
            maxLength='1000'
            minLength='50'
            required
            className={CSS['review-modal-textbox-body']}
            onChange={this.onBodyChange}
            style={violationStyle}
          />
          <div><i>{this.state.characters < 50 ? `Minimum required characters left: ${50 - this.state.characters}` : 'Minimum Reached'}</i></div>
        </div>

        <div>
          <div><b>Upload your photos (Max: 5)</b></div>
          <input
            type='file'
            id='review-photo'
            name='filename'
            onChange={this.onUploadPhoto}
            disabled={this.state.photos.length === 5}
            style={{ marginBottom: '10px' }}
          />
        </div>

        {this.state.photos.map(
          (url) => <img src={url} alt='uploaded photo' key={url} className={CSS['review-photo']} onClick={this.onDeletePhoto} />,
        )}
      </>
    );
  }
}

export default ReviewContent;
