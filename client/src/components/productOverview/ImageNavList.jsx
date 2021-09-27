import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageNavButton from './ImageNavButton.jsx';

const NavList = (props) => (
  <>
    {props.currentStyle && props.main < props.currentStyle.photos.length - 1
      && <figure className='gallery-nav-right'>
        <ImageNavButton direction='right' icon={'arrow-right'} onClick={props.handleNavClick} />
      </figure>}

    {props.styles.length > 0 && props.main > 0
      && <figure className='gallery-nav-left'>
        <ImageNavButton direction={'left'} icon={'arrow-left'} onClick={props.handleNavClick} />
      </figure>}

    {props.styles.length > 0 && props.thumb > 0
      && <figure className='gallery-nav-up'>
        <ImageNavButton direction={'up'} icon={'angle-up'} onClick={props.handleNavClick} />
      </figure>}

    {props.currentStyle
      && props.thumb + 4 < props.currentStyle.photos.length - 1
      && <figure className='gallery-nav-down'>
        <ImageNavButton direction={'down'} icon={'angle-down'} onClick={props.handleNavClick} />
      </figure>}
  </>
);

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
});

NavList.propTypes = {
  styles: PropTypes.object,
  currentStyle: PropTypes.object,
  main: PropTypes.number,
  thumb: PropTypes.number,
  handleNavClick: PropTypes.func,
};
export default connect(mapStateToProps)(NavList);
