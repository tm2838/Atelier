import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import testStore from '../../../fixtures/testStore';
import ReviewModal from '../reviewModal/reviewModal.jsx';
import '../../common/fontAwesomeIcons';

describe('reviewModal', () => {
  it('should render a list of review fields', () => {
    const { getByText, getAllByRole } = render(
      <Provider store={testStore}>
        <ReviewModal />
      </Provider>,
    );

    expect(getByText(/Overall rating/)).toBeTruthy();
    expect(getByText(/Do you recommend this product/)).toBeTruthy();
    expect(getByText(/Characteristics/)).toBeTruthy();
    expect(getByText(/Review Summary/)).toBeTruthy();
    expect(getByText(/Review Body/)).toBeTruthy();
    expect(getByText(/Upload your photos/)).toBeTruthy();
    expect(getByText(/What is your nick name/)).toBeTruthy();
    expect(getByText(/Your email/)).toBeTruthy();
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('should render the user input', () => {
    const { getByLabelText, getByTestId } = render(
      <Provider store={testStore}>
        <ReviewModal />
      </Provider>,
    );

    fireEvent.change(getByLabelText('Review Summary:'), { target: { value: 'this is a test' } });
    expect(getByTestId('review-summary').value).toBe('this is a test');
  });
});
