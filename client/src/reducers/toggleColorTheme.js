const colorThemeReducer = (state = 'LIGHT', action) => {
  if (action.type === 'CHANGE_COLOR_THEME') {
    return action.theme;
  }
  return state;
};

export default colorThemeReducer;
