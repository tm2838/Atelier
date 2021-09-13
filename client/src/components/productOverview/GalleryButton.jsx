import React from 'react';

const GalleryButton = (props) => {
  return (
    <button onClick={() => props.onClick(props.direction)}>{props.direction}</button>
  )
}

export default GalleryButton;