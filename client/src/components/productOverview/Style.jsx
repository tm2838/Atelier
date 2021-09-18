/* eslint-disable react/prop-types */
import React from 'react';

const Style = (props) => (

  <div className={`style-selector style-selector-${props.index}`}>
    <img className='style-img' onClick={() => props.onClick(props.index)} src={props.photo} alt='styles...'>
    </img>
  </div>

);

// Style.PropTypes = {
//   photo: PropTypes.string,
// };

export default Style;
