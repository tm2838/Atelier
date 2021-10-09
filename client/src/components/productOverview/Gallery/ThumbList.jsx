/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ThumbList = (props) => (
  <>
    {
      props.currentStyle.photos.map((photo, index) => {
        if (index < 5) {
          const style = props.thumb + index === props.main ? { filter: 'grayscale(0)' } : { filter: 'grayscale(1)' };
          const photoIndex = index + props.thumb;
          return <figure
            key={index * 9}
            className={`gallery-thumb-${index}`}
            data-testid={`gallery-thumb-${index}`}
            onClick={() => props.handleImageClick(index)}>
            <img
              src={props.currentStyle.photos[photoIndex].thumbnail_url}
              className='gallery-thumb'
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
