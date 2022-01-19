import React from 'react';
import PropTypes from 'prop-types';

const MainImage = (props) => (
  <div className='gallery-main'>
    <img
      src={props.photo}
      className='gallery-img'
      data-testid='gallery-img'
      alt='Main image'
    >
    </img>
  </div>
);

MainImage.propTypes = {
  photo: PropTypes.string,
};

export default MainImage;
