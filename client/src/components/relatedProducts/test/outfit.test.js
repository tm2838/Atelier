/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/rootReducer';
import Outfit from '../Outfit.jsx';

describe('outfit', () => {
  const testStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk),
  );

  it('should render Outfit component without crashing', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Outfit />
      </Provider>,
    );
    expect(getByText('YOUR OUTFIT')).toBeTruthy();
  });
});
