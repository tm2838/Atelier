import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewContent from '../reviewModal/reviewModalContent.jsx';

describe('reviewModalUserInfo', () => {
  it('should render review body', () => {
    const handleBodyChange = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <ReviewContent
        handleBodyChange={handleBodyChange}
        handleUpdatePhotos={() => {}}
        violations={[]}
      />,
    );

    fireEvent.change(getByLabelText('Review Body *'), { target: { value: 'this is a test' } });
    expect(getByTestId('review-body').value).toBe('this is a test');
    expect(handleBodyChange).toHaveBeenCalledTimes(1);
  });

  it('should render review photos', () => {
    const file = new File(['testImage'], 'testImage.png', { type: 'image/png' });
    global.URL.createObjectURL = jest.fn().mockReturnValue('fake-url');
    const handleUpdatePhotos = jest.fn();
    const { getByRole, getByTestId } = render(
      <ReviewContent
        handleBodyChange={() => {}}
        handleUpdatePhotos={handleUpdatePhotos}
        violations={[]}
      />,
    );

    fireEvent.change(getByTestId('review-photo-upload'), { target: { files: [file] } });
    expect(getByRole('img')).toBeTruthy();
    expect(handleUpdatePhotos).toHaveBeenCalledTimes(1);
  });
});
