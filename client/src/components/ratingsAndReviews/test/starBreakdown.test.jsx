import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import StarBreakdown from '../ratings/starBreakdown.jsx';
import testStore from '../../../fixtures/testStore';
import '../../common/fontAwesomeIcons';

describe('starBreakdown', () => {
  it('should render the distribution of star reviews', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <StarBreakdown />
      </Provider>,
    );

    expect(getByText(/1 Star/)).toBeTruthy();
    expect(getByText(/4 Stars/)).toBeTruthy();
    expect(getByText(/5 Stars/)).toBeTruthy();
    expect(getByText(/2 Stars/)).toBeTruthy();
    expect(getByText(/3 Stars/)).toBeTruthy();
  });

  it('should add star rating as a filter on click', () => {
    testStore.dispatch = jest.fn();
    const { getByText } = render(
      <Provider store={testStore}>
        <StarBreakdown />
      </Provider>,
    );

    fireEvent.click(getByText(/3 Stars/));
    expect(testStore.dispatch).toHaveBeenCalledTimes(3);
    expect(testStore.dispatch).toHaveBeenCalledWith({ filters: ['3'], type: 'CHANGE_FILTERS' });
  });

  it('should remove star rating as a filter on second click', () => {
    testStore.dispatch = jest.fn();
    const { getByText } = render(
      <Provider store={testStore}>
        <StarBreakdown />
      </Provider>,
    );

    fireEvent.click(getByText(/3 Stars/));
    fireEvent.click(getByText(/3 Stars/));
    expect(testStore.dispatch).toHaveBeenCalledTimes(6);
  });
});
