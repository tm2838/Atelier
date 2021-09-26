import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SortingDropdown from '../reviews/sortingDropdown.jsx';
import testStore from '../../../fixtures/testStore';
import '../../common/fontAwesomeIcons';

describe('sortingDropdown', () => {
  it('should render the sorting dropdown without crash', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <SortingDropdown />
      </Provider>,
    );

    expect(getByText(/3 reviews, sorted by/)).toBeTruthy();
  });

  it('should render the selected value in the dropdown', () => {
    const { getByTestId, getByRole } = render(
      <Provider store={testStore}>
        <SortingDropdown />
      </Provider>,
    );
    // by default, 'relevant' is selected
    expect(getByRole('combobox').value).toBe('relevant');
    // select another value
    fireEvent.change(getByTestId('select'), { target: { value: 'helpful' } });
    expect(getByRole('combobox').value).toBe('helpful');
  });
});
