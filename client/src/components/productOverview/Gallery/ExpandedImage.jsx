import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import ExpandButton from './ExpandButton.jsx';

const ExpandedImage = ({
  currentStyle,
  main,
  // thumb,
  // onThumbClick,
  // onNavClick,
}) => (
  <div className="gallery-expanded-container">
    <ExpandButton className={'gallery-modal-close'} icon={'times'}/>
    <div className="gallery-modal">

      <InnerImageZoom
      className='gallery-modal-image'
      src={currentStyle.photos[main].url}
      zoomScale={2.5}
      hideHint={true}
      />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
  imageView: state.imageView,
});

ExpandedImage.propTypes = {
  styles: PropTypes.array,
  currentStyle: PropTypes.object,
  imageView: PropTypes.bool,
  main: PropTypes.number,
  thumb: PropTypes.number,
  onThumbClick: PropTypes.func,
  onNavClick: PropTypes.func,
};

export default connect(mapStateToProps)(ExpandedImage);
