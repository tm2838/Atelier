import React from 'react';

const ImageGallery = (props) => {
  return (
    <div>
      {
        (props.currentStyle.length === 0)
          ? <figure>
              <img className='gallery-img' alt='Main image'></img>
            </figure>

          : <div className='gallery'>
            <p>
              {props.id}
            </p>
            <figure className='gallery-main'>
              <img src={props.currentStyle[0].photos[0].url} className='gallery-img' alt='Main image'></img>
            </figure>
            <figure className='gallery-thumb-1'>
              <img src={props.currentStyle[0].photos[1].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure className='gallery-thumb-2'>
              <img src={props.currentStyle[0].photos[2].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure className='gallery-thumb-3'>
              <img src={props.currentStyle[0].photos[3].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure className='gallery-thumb-4'>
             <img src={props.currentStyle[0].photos[4].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
            </figure>
            <figure className='gallery-thumb-5'>
              <img src={props.currentStyle[0].photos[5].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
            </figure>
            </div>

      }
    </div>
  )
}

export default ImageGallery;