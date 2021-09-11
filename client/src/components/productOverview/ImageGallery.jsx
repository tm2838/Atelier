import React from 'react';

const ImageGallery = (props) => {
  return (
    <div class='gallery'>
      <figure class='gallery-main'>
        {
          (props.currentStyle.length === 0)
            ? <img class='gallery-main-img' alt='Main image'></img>
            : <img src={props.currentStyle[0].photos[0].url} class='gallery-main-img' alt='Main image'></img>

        }
      </figure>
      {
          (props.currentStyle.length === 0)
            ? <p>still waiting</p>
            : <p>done</p>

        }
    </div>
  )
}

export default ImageGallery;