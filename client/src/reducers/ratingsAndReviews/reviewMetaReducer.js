const reviewMetaReducer = (state = [], action) => {
  if (action.type === 'CHANGE_REVIEW_META') {
    return action.reviewMeta;
  }
  return state;
};

export default reviewMetaReducer;
