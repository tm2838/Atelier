/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ThumbList = ({
  currentStyle,
  main,
  thumb,
  handleImageClick,
}) => (
  <>
    {
      currentStyle.photos.map((photo, index) => {
        if (index < 5) {
          const style = thumb + index === main ? { filter: 'contrast(150%)' } : { filter: 'grayscale(1)' };
          const photoIndex = index + thumb;
          return <figure
            key={index * 9}
            className={`gallery-thumb-${index}`}
            data-testid={`gallery-thumb-${index}`}
            onClick={() => handleImageClick(index)}>
            <img
              src={currentStyle.photos[photoIndex].thumbnail_url}
              className='gallery-thumb'
              data-testid={`gallery-thumb-img-${index}`}
              style={style}
              alt='Thumbnail'>
            </img>
          </figure>;
        }
      })
    }
  </>
);

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

ThumbList.propTypes = {
  currentStyle: PropTypes.object,
  main: PropTypes.number,
  thumb: PropTypes.number,
  handleImageClick: PropTypes.func,
};

export default connect(mapStateToProps)(ThumbList);
