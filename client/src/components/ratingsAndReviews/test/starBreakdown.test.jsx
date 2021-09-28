import React from 'react';
import { render } from '@testing-library/react';
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
});
