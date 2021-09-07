import React from 'react';
import {render} from '@testing-library/react';

import App from './app.jsx';

describe('App', () => {
  it("should render without crashing", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Hello/i)).toBeTruthy();
  })
})