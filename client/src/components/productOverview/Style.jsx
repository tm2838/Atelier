import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Style = ({
  index,
  photo,
  selected,
  onClick,
}) => (

  <div className={`style-selector style-selector-${index}`}>
    <img className='style-img' onClick={() => onClick(index)} src={photo} alt='styles...' />
    { selected && <FontAwesomeIcon icon='check-circle' className='style-check'/>}
  </div>

);

Style.propTypes = {
  photo: PropTypes.string,
  index: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Style;
