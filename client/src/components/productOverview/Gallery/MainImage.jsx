import React from 'react';
import PropTypes from 'prop-types';

const MainImage = (props) => (
  <figure className='gallery-main'>
    <img
      src={props.photo}
      className='gallery-img'
      data-testid='gallery-img'
      alt='Main image'
    >
    </img>
  </figure>
);

MainImage.propTypes = {
  photo: PropTypes.string,
};

export default MainImage;
