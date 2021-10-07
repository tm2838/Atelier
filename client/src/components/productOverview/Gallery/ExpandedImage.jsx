import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpandButton from './ExpandButton.jsx';

const ExpandedImage = ({
  currentStyle,
  main,
  // thumb,
  // onThumbClick,
  // onNavClick,
}) => (
  <div className="gallery-expanded-container">
    <ExpandButton className={'gallery-modal-close'} />
    <div className="gallery-modal">

      <div className='gallery-modal-image'>
        <div className='gallery-modal-number'>1/4</div>
        <img src={currentStyle.photos[main].url} style={{ width: '100%' }} alt='modal image'/>
      </div>

      {/* <div className="">
        <div className="numbertext">1 / 4</div>
        <img src="img1_wide.jpg" style="width:100%"/>
      </div>

      <div className="mySlides">
        <div className="numbertext">2 / 4</div>
        <img src="img2_wide.jpg" style="width:100%"/>
      </div>

      <div className="mySlides">
        <div className="numbertext">3 / 4</div>
        <img src="img3_wide.jpg" style="width:100%"/>
      </div>

      <div className="mySlides">
        <div className="numbertext">4 / 4</div>
        <img src="img4_wide.jpg" style="width:100%"/>
      </div> */}

      {/* <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
      <a className="next" onClick="plusSlides(1)">&#10095;</a> */}

      {/* <div className="caption-container">
        <p id="caption"></p>
      </div> */}

      {/* <div className="column">
        <img className="demo" src="img1.jpg" onClick="currentSlide(1)" alt="Nature"/>
      </div>

      <div className="column">
        <img className="demo" src="img2.jpg" onClick="currentSlide(2)" alt="Snow"/>
      </div>

      <div className="column">
        <img className="demo" src="img3.jpg" onClick="currentSlide(3)" alt="Mountains"/>
      </div>

      <div className="column">
        <img className="demo" src="img4.jpg" onClick="currentSlide(4)" alt="Lights"/>
      </div> */}
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
