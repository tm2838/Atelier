import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import testStore from '../../../fixtures/testStore';
import Ratings from '../ratings/ratings.jsx';
import '../../common/fontAwesomeIcons';

describe('Ratings', () => {
  it('should render the rating section without crashing', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Ratings />
      </Provider>,
    );

    expect(getByText(/3.7/)).toBeTruthy();
    // expect(getByText(/3.7/)).toHaveStyle('font-weight: "bold"');
    expect(getByText(/42.86% of reviews recommend this product/)).toBeTruthy();
  });
});
