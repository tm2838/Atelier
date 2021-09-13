import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../store';

import App from './app.jsx';

describe('App', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Provider store={configureStore()}>
      <App />
      </Provider>);

    expect(getByText(/Hello/i)).toBeTruthy();
  });
});
