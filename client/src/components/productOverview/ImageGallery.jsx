import React from 'react';

const ImageGallery = (props) => {
  return (
    <div>
      {
        (props.currentStyle.length === 0)
          ? <figure class='gallery-main'>
              <img class='gallery-img' alt='Main image'></img>
            </figure>

          : <div class='gallery'>
            <figure class='gallery-main'>
              <img src={props.currentStyle[0].photos[0].url} class='gallery-img' alt='Main image'></img>
            </figure>
            <figure class='gallery-thumb-1'>
              <img src={props.currentStyle[0].photos[1].thumbnail_url} class='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure class='gallery-thumb-2'>
              <img src={props.currentStyle[0].photos[2].thumbnail_url} class='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure class='gallery-thumb-3'>
              <img src={props.currentStyle[0].photos[3].thumbnail_url} class='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure class='gallery-thumb-4'>
             <img src={props.currentStyle[0].photos[4].thumbnail_url} class='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure class='gallery-thumb-5'>
              <img src={props.currentStyle[0].photos[5].thumbnail_url} class='gallery-thumb' alt='Main image'></img>
            </figure>
            </div>

      }
    </div>
  )
}

export default ImageGallery;