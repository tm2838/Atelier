import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import changeImage from '../../../actions/productOverview/imageView';

const ExpandButton = (props) => (
  <figure className='gallery-expand-button'>
    <FontAwesomeIcon
      className='gallery-nav'
      data-testid='gallery-expand-button'
      icon={'expand'}
      onClick={() => props.handleExpand(!props.imageView)}
    />
  </figure>
);

const mapStateToProps = (state) => ({
  imageView: state.imageView,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpand: (view) => {
    dispatch(changeImage(view));
  },
});

ExpandButton.propTypes = {
  imageView: PropTypes.bool,
  handleExpand: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandButton);
