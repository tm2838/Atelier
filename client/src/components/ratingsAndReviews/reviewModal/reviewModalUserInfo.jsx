/* eslint-disable react/prop-types */
import React from 'react';
import '../ratingsAndReviews.css';

const ReviewUserInfo = ({
  handleName, handleEmail, violations, theme,
}) => {
  const onNameChange = (e) => {
    handleName(e.target.value);
  };

  const onEmailChange = (e) => {
    handleEmail(e.target.value);
  };

  const violationStyle = { border: '1px solid red' };
  const themeInputClass = theme === 'LIGHT' ? 'review-modal-textbox' : 'review-modal-textbox-dark';
  return (
    <>
      <div className='review-modal-input'>
        <label htmlFor='username'><b>What is your nick name * </b></label>
        { violations.includes('name') && <div style={{ color: 'red' }}>You must enter the following</div> }
        <textarea
          id='username'
          data-testid='review-username'
          placeholder='Example: jackson11'
          maxLength='60'
          required
          className={themeInputClass}
          onChange={onNameChange}
          style={ violations.includes('name') ? { ...violationStyle } : {}}
        />
        <div><i>For privacy reasons, do not use your full name or email address</i></div>
      </div>

      <div className='review-modal-input'>
        <label htmlFor='email'><b>Your email * </b></label>
          { violations.includes('body') && <div style={{ color: 'red' }}>You must enter the following</div> }
          <textarea
            id='email'
            data-testid='review-email'
            placeholder='Example: jackson11@email.com'
            maxLength='60'
            required
            className={themeInputClass}
            onChange={onEmailChange}
            style={ violations.includes('body') ? { ...violationStyle } : {}}
          />
          <div><i>For authentication reasons, you will not be emailed</i></div>
      </div>
    </>
  );
};

export default ReviewUserInfo;
