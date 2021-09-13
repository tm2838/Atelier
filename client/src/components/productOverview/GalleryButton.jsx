import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GalleryButton = (props) => {
  return (
    <div>
      <FontAwesomeIcon
      className='gallery-nav'
      icon={props.icon}
      size='2x'
      onClick={() => props.onClick(props.direction)} />
    </div>
  )
}

export default GalleryButton;