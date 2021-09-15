/* eslint-disable react/prop-types */
import React from 'react';

const Style = (props) => (

  <li className={`style-selector style-selector-${props.index}`} >
    <img className='style-img' src={props.photo} alt='styles...'></img>
  </li>

);

// Style.PropTypes = {
//   photo: PropTypes.string,
// };

export default Style;
