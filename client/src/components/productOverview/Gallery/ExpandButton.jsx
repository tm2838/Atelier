import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import changeImage from '../../../actions/productOverview/imageView';

const ExpandButton = ({ imageView, handleExpand }) => (
  <figure className='gallery-modal-open'>
    <FontAwesomeIcon
      className='gallery-nav'
      data-testid='gallery-expand-button'
      icon={'expand'}
      onClick={() => handleExpand(!imageView)}
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
