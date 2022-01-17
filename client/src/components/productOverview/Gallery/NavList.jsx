import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavButton from './NavButton.jsx';

const NavList = (props) => (
  <>
    {props.currentStyle && props.main < props.currentStyle.photos.length - 1
      && <div className='gallery-nav-right'>
        <NavButton direction={'right'} icon={'arrow-circle-right'} onClick={props.handleNavClick} />
      </div>}

    {props.styles.length > 0 && props.main > 0
      && <div className='gallery-nav-left'>
        <NavButton direction={'left'} icon={'arrow-circle-left'} onClick={props.handleNavClick} />
      </div>}

    {props.styles.length > 0 && props.thumb > 0
      && <div className='gallery-nav-up'>
        <NavButton className={'nav-up'} direction={'up'} icon={'chevron-circle-up'} onClick={props.handleNavClick} />
      </div>}

    {props.currentStyle
      && props.thumb + 4 < props.currentStyle.photos.length - 1
      && <div className='gallery-nav-down'>
        <NavButton className={'nav-down'} direction={'down'} icon={'chevron-circle-down'} onClick={props.handleNavClick} />
      </div>}
  </>
);

const mapStateToProps = (state) => ({
  styles: state.styleList,
  currentStyle: state.currentStyle,
});

NavList.propTypes = {
  styles: PropTypes.array,
  currentStyle: PropTypes.object,
  main: PropTypes.number,
  thumb: PropTypes.number,
  handleNavClick: PropTypes.func,
};
export default connect(mapStateToProps)(NavList);
