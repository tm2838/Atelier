import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CharRating from '../reviewModal/reviewModalCharRating.jsx';
import testStore from '../../../fixtures/testStore';
import '../../common/fontAwesomeIcons';

describe('starBreakdown', () => {
  it('should render the characteristic rating', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <CharRating characteristic='Size' options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}/>
      </Provider>,
    );

    expect(getByText(/option 1/)).toBeTruthy();
    expect(getByText(/option 5/)).toBeTruthy();
    expect(getByText(/Size/)).toBeTruthy();
    expect(getByText(/Current selection: None selected/)).toBeTruthy();
  });

  it('should render the selected option', () => {
    const { getByText, getByTestId } = render(
      <Provider store={testStore}>
        <CharRating characteristic='Size' options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']} handleChange={() => {}}/>
      </Provider>,
    );

    fireEvent.click(getByTestId('option-3'));
    expect(getByText(/Current selection: option 3/)).toBeTruthy();
  });
});
