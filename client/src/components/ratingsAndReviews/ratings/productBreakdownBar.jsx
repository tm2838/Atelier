/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../ratingsAndReviews.css';

const ProductBreakdownBar = ({
  characteristic, options, point, theme,
}) => {
  const marginLeft = parseInt(point - 1, 10).toFixed(2) * 23;
  const optionsToDisplay = [options[0], options[2], options[4]];
  const themeBackgroundColor = theme === 'LIGHT' ? '#dcdcdc' : '#454B4D';
  const themeCaretClass = theme === 'LIGHT' ? 'product-breakdown-caret-down' : 'product-breakdown-caret-down-dark';
  return (
    <>
      <div className={'product-breakdown-characteristic'}>{characteristic}:</div>
      <div className={'product-breakdown-container'}>
        {optionsToDisplay.map((option) => <div key={option} style={{ width: '95%', height: '10px', backgroundColor: themeBackgroundColor }} className={`product-breakdown-option-${options.indexOf(option)}`}/>)}
        <div className={'product-breakdown-indicator-0'}>{options[0]}</div>
        <div className={'product-breakdown-indicator-1'}>{options[4]}</div>
        <FontAwesomeIcon icon='caret-down' size='2x' className={themeCaretClass} style={{
          marginLeft: `${marginLeft}%`,
        }}/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ProductBreakdownBar);
