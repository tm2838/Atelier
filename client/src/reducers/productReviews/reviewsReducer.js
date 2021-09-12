import Redux from 'redux';

const reviewsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_REVIEWS') {
    return action.reviews;
  } else {
    return state;
  }
}

export default reviewsReducer;