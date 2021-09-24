/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import CharRating from './reviewModalCharRating.jsx';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      uploadedPhotos: [],
    };
    this.handlePostReview = this.handlePostReview.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);
  }

  handlePostReview() {

  }

  onSelectOption(e) {
    if (e.target.value === this.state.selected) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: e.target.value });
    }
  }

  handleUploadPhoto(e) {
    e.preventDefault();
    this.setState({
      uploadedPhotos: [...this.state.uploadedPhotos, URL.createObjectURL(e.target.files[0])],
    });
  }

  handleDeletePhoto(e) {
    const photoToDelete = this.state.uploadedPhotos.indexOf(e.target.src);
    const remainingPhotos = this.state.uploadedPhotos.slice();
    remainingPhotos.splice(photoToDelete, 1);
    this.setState({ uploadedPhotos: remainingPhotos });
  }

  render() {
    const { selected } = this.state;
    const { product, onModalClose } = this.props;
    return (
      <div className={CSS['review-modal']}>
        <div className={CSS['review-modal-content']}>
          <h2 className={CSS['review-modal-title']}> Write Your Review</h2>
          <h4 className={CSS['review-modal-subtitle']}> About the {`${product.name}`}</h4>
          <form onSubmit={this.handlePostReview}>
            <>
              <div className={CSS['review-modal-input']}>
                <div required><b>Do you recommend this product? * </b></div>
                <input type='radio' value='yes' name='recommend' checked={selected === 'yes'} onClick={this.onSelectOption} />  Yes
                <input type='radio' value='no' name='recommend' checked={selected === 'no'} onClick={this.onSelectOption} />  No
              </div>

              <div className={CSS['review-modal-input']}>
                <div required><b>Please rate each characteristic * </b></div>
                <CharRating
                  characteristic='Size'
                  options={['A size too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'A size too wide']}
                />
                <CharRating
                  characteristic='Width'
                  options={['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']}
                />
                <CharRating
                  characteristic='Comfort'
                  options={['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect']}
                />
                <CharRating
                  characteristic='Quality'
                  options={['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']}
                />
                <CharRating
                  characteristic='Length'
                  options={['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']}
                />
                <CharRating
                  characteristic='Fit'
                  options={['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}
                />
              </div>

              <div className={CSS['review-modal-input']}>
                <div><b>Review Summary: </b></div>
                <textarea
                  id='review-summary'
                  placeholder='Example: Best purchase ever!'
                  maxLength='60'
                  className={CSS['review-modal-textbox']}
                />
              </div>

              <div className={CSS['review-modal-input']}>
                <div><b>What is your nick name? * </b></div>
                <textarea
                  id='username'
                  placeholder='Example: jackson11'
                  maxLength='60'
                  required
                  className={CSS['review-modal-textbox']}
                />
                <div><i>For privacy reasons, do not use your full name or email address</i></div>
              </div>

              <div className={CSS['review-modal-input']}>
                <div><b>Your email? * </b></div>
                  <textarea
                    id='email'
                    placeholder='Example: jackson11@email.com'
                    maxLength='60'
                    required
                    className={CSS['review-modal-textbox']}
                  />
                  <div><i>For authentication reasons, you will not be emailed</i></div>
              </div>

              <div>
                <div><b>Upload photo (Max: 5)</b></div>
                <input
                  type='file'
                  id='review-photo'
                  name='filename'
                  onChange={this.handleUploadPhoto}
                  disabled={this.state.uploadedPhotos.length === 5}
                  style={{ marginBottom: '10px' }}
                />
              </div>

              {this.state.uploadedPhotos.map(
                (url) => <img src={url} alt='uploaded l=hoto' key={url} className={CSS['review-photo']} onClick={this.handleDeletePhoto} />,
              )}
            </>

            <div>
              <button className={CSS['review-btn']} onClick={onModalClose}>Add Review</button>
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
});

export default connect(mapStateToProps)(ReviewModal);
