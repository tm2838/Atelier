import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const Button = (props) => {
  // if props = related product, render
  if (props.type === 'related') {
    return <FontAwesomeIcon icon={['far', 'star']} onClick={ () => props.onClickStar(props.product) } />;
    // return <i className='far fa-star'></i>
  }
  // else if props = outfit, render
  return <FontAwesomeIcon icon={'faTimesCircle'} />;
  // return <i className='far '></i>
};

Button.propTypes = {
  type: PropTypes.string,
  product: PropTypes.object,
  onClickStar: PropTypes.func,
};

export default Button;
