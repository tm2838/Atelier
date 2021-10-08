import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ThumbList = (props) => (
  <>
    <figure className='gallery-thumb-0' data-testid='gallery-thumb-0' onClick={() => props.handleImageClick(0)}>
      <img
        src={props.currentStyle.photos[props.thumb].thumbnail_url}
        className='gallery-thumb'
        alt='Thumbnail'>
      </img>
    </figure>

    {
      props.currentStyle.photos[1] && <figure className='gallery-thumb-1' data-testid='gallery-thumb-1'
        onClick={() => props.handleImageClick(1)}>
        <img
          src={props.currentStyle.photos[props.thumb + 1].thumbnail_url}
          className='gallery-thumb'
          alt='Thumbnail'>
        </img>
      </figure>
    }

    {
      props.currentStyle.photos[2] && <figure className='gallery-thumb-2' data-testid='gallery-thumb-2'
        onClick={() => props.handleImageClick(2)}>
        <img
          src={props.currentStyle.photos[props.thumb + 2].thumbnail_url}
          className='gallery-thumb'
          alt='Thumbnail'>
        </img>
      </figure>
    }

    {
      props.currentStyle.photos[3] && <figure className='gallery-thumb-3' data-testid='gallery-thumb-3'
        onClick={() => props.handleImageClick(3)}>
        <img
          src={props.currentStyle.photos[props.thumb + 3].thumbnail_url}
          className='gallery-thumb'
          alt='Thumbnail'>
        </img>
      </figure>
    }

    {
      props.currentStyle.photos[4] && <figure className='gallery-thumb-4' data-testid='gallery-thumb-4'
        onClick={() => props.handleImageClick(4)}>
        <img
          src={props.currentStyle.photos[props.thumb + 4].thumbnail_url}
          className='gallery-thumb'
          alt='Thumbnail'>
        </img>
      </figure>
    }
  </>
);

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

ThumbList.propTypes = {
  currentStyle: PropTypes.object,
  thumb: PropTypes.number,
  handleImageClick: PropTypes.func,
};

export default connect(mapStateToProps)(ThumbList);
