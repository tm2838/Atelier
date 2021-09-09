import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Defined an initial state just as an example and to test functionality
export default function configureStore(initialState = { placeholder: 'redux' }) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
