/* eslint-disable react/prop-types */
import React from 'react';

const Style = (props) => (

  <figure className='style-selector' >
    <img className='style-img' src={props.photo} alt='styles...'></img>
  </figure>

);

// Style.PropTypes = {
//   photo: PropTypes.string,
// };

export default Style;
