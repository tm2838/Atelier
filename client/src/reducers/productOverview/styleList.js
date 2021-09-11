import Redux from 'redux';

export default (state = [], action) => {
  if (action.type === 'CHANGE_STYLES') {
    return action.styles;
  } else {
    return state;
  }
}