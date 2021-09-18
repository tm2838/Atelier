import React from 'react';
import { render } from '@testing-library/react';
import Review from '../review.jsx';
import testReview from '../../../fixtures/testReview.json';
import '../../common/fontAwesomeIcons';

describe('Review', () => {
  it('should render the individual review without crash', () => {
    const { getByText } = render(<Review review={testReview.reviews[0]}/>);

    expect(getByText(/This is a review body 1/)).toBeTruthy();
    expect(getByText(/2019-01-11/)).toBeTruthy();
    expect(getByText(/This is a review summay 1/)).toBeTruthy();
    expect(getByText(/reviewer1/)).toBeTruthy();
  });
});
