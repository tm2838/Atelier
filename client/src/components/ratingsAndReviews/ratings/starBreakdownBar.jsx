/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import '../ratingsAndReviews.css';

const StarBreakdownBar = ({ barStyle = { width: '50%' }, theme }) => {
  const themeClass = theme === 'LIGHT' ? 'star-breakdown-bar-container' : 'star-breakdown-bar-container-dark';
  const themeBarColor = theme === 'LIGHT' ? '#b1d2b0ff' : '#5D6D58';
  return (
    <div className={themeClass}>
      <div className='star-breakdown-bar' style={{
        ...barStyle, height: '10px', backgroundColor: themeBarColor, borderRadius: '10px',
      }}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(StarBreakdownBar);
