import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import testStore from '../../../fixtures/testStore';
import ProductBreakdown from '../ratings/productBreakdown.jsx';
import '../../common/fontAwesomeIcons';

describe('productBreakdown', () => {
  it('should render a list of characteristics', () => {
    const { getByText, queryByText } = render(
      <Provider store={testStore}>
        <ProductBreakdown />
      </Provider>,
    );

    expect(getByText(/Comfort/)).toBeTruthy();
    expect(getByText(/Fit/)).toBeTruthy();
    expect(getByText(/Quality/)).toBeTruthy();
    expect(getByText(/Length/)).toBeTruthy();
    expect(queryByText(/Size/)).toBeFalsy();
  });
});
