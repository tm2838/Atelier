import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GalleryButton = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={['fas', props.icon]} onClick={() => props.onClick(props.direction)} />
    </div>
  )
}

export default GalleryButton;