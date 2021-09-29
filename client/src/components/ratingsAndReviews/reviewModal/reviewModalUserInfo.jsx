/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';

const ReviewUserInfo = ({ handleName, handleEmail }) => {
  const onNameChange = (e) => {
    handleName(e.target.value);
  };

  const onEmailChange = (e) => {
    handleEmail(e.target.value);
  };

  return (
    <>
      <div className={CSS['review-modal-input']}>
        <div><b>What is your nick name * </b></div>
        <textarea
          id='username'
          placeholder='Example: jackson11'
          maxLength='60'
          required
          className={CSS['review-modal-textbox']}
          onChange={onNameChange}
        />
        <div><i>For privacy reasons, do not use your full name or email address</i></div>
      </div>

      <div className={CSS['review-modal-input']}>
        <div><b>Your email * </b></div>
          <textarea
            id='email'
            placeholder='Example: jackson11@email.com'
            maxLength='60'
            required
            className={CSS['review-modal-textbox']}
            onChange={onEmailChange}
          />
          <div><i>For authentication reasons, you will not be emailed</i></div>
      </div>
    </>
  );
};

export default ReviewUserInfo;
