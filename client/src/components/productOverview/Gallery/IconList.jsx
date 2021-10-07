import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconList = (props) => (
  <>
      <figure className='gallery-thumb-0' data-testid='gallery-icon-0' onClick={() => props.handleImageClick(0)}>
      <FontAwesomeIcon
        icon='image'
        size='2x'
        className='gallery-icon'>
      </FontAwesomeIcon>
    </figure>

    {
      props.currentStyle.photos[1] && <figure className='gallery-thumb-1' data-testid='gallery-icon-1'
        onClick={() => props.handleImageClick(1)}>
        <FontAwesomeIcon
          icon='image'
          size='2x'
          className='gallery-icon'>
        </FontAwesomeIcon>
      </figure>
    }

    {
      props.currentStyle.photos[2] && <figure className='gallery-thumb-2' data-testid='gallery-icon-2'
        onClick={() => props.handleImageClick(2)}>
        <FontAwesomeIcon
          icon='image'
          size='2x'
          className='gallery-icon'>
        </FontAwesomeIcon>
      </figure>
    }

    {
      props.currentStyle.photos[3] && <figure className='gallery-thumb-3' data-testid='gallery-icon-3'
        onClick={() => props.handleImageClick(3)}>
        <FontAwesomeIcon
          icon='image'
          size='2x'
          className='gallery-icon'>
        </FontAwesomeIcon>
      </figure>
    }

    {
      props.currentStyle.photos[4] && <figure className='gallery-thumb-4' data-testid='gallery-icon-4'
        onClick={() => props.handleImageClick(4)}>
        <FontAwesomeIcon
          icon='image'
          size='2x'
          className='gallery-icon'>
        </FontAwesomeIcon>
      </figure>
    }
  </>
);

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

IconList.propTypes = {
  currentStyle: PropTypes.object,
  thumb: PropTypes.number,
  handleImageClick: PropTypes.func,
};

export default connect(mapStateToProps)(IconList);
