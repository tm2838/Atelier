import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExpandButton from './ExpandButton.jsx';
import NavButton from './NavButton.jsx';

const ExpandedImage = ({
  currentStyle,
  main,
  handleImageClick,
  handleNavClick,
}) => (
  <div className="gallery-expanded-container">
    <ExpandButton className={'gallery-modal-close'} icon={'times'} />
    <div className="gallery-modal">

      <InnerImageZoom
        className='gallery-modal-image'
        src={currentStyle?.photos[main]?.url}
        zoomScale={2.5}
        hideHint={true}
      />

      {
        main > 0
        && <NavButton
        className={'expanded-nav-left'}
        icon={'angle-left'}
        direction={'left'}
        onClick={handleNavClick}
      />
      }
      {
        main < currentStyle.photos.length - 1
        && <NavButton
        className={'expanded-nav-right'}
        icon={'angle-right'}
        direction={'right'}
        onClick={handleNavClick}
      />
      }
      <div className='gallery-icons'>
        {
          currentStyle.photos.map((photo, index) => {
            const style = index === main ? { color: 'blue' } : { color: 'white' };
            return <FontAwesomeIcon
              key={photo}
              icon='square'
              size='2x'
              style={style}
              className='gallery-icon'
              onClick={() => handleImageClick(index, true)}>
            </FontAwesomeIcon>;
          })
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

ExpandedImage.propTypes = {
  currentStyle: PropTypes.object,
  main: PropTypes.number,
  handleImageClick: PropTypes.func,
  handleNavClick: PropTypes.func,
};

export default connect(mapStateToProps)(ExpandedImage);
