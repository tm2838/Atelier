import React from 'react';
import PropTypes from 'prop-types';

const MainImage = (props) => (
  <figure className='gallery-main'>
    <img
      src={props.photo}
      className='gallery-img'
      data-testid='gallery-img'
      alt='Main image'
      onClick={() => props.onClick()}>
    </img>
  </figure>
);

MainImage.propTypes = {
  photo: PropTypes.string,
  onClick: PropTypes.func,
};

export default MainImage;
