import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewUserInfo from '../reviewModal/reviewModalUserInfo.jsx';

describe('reviewModalUserInfo', () => {
  it('should render user name', () => {
    const handleName = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <ReviewUserInfo
        handleName={handleName}
        handleEmail={() => {}}
        violations={[]}
      />,
    );

    fireEvent.change(getByLabelText('What is your nick name *'), { target: { value: 'this is a test' } });
    expect(getByTestId('review-username').value).toBe('this is a test');
    expect(handleName).toHaveBeenCalledTimes(1);
  });

  it('should render user email', () => {
    const handleEmail = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <ReviewUserInfo
        handleName={() => {}}
        handleEmail={handleEmail}
        violations={[]}
      />,
    );

    fireEvent.change(getByLabelText('Your email *'), { target: { value: 'this is a test' } });
    expect(getByTestId('review-email').value).toBe('this is a test');
    expect(handleEmail).toHaveBeenCalledTimes(1);
  });
});
