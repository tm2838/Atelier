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
  return <FontAwesomeIcon icon={['far', 'times-circle']}
  // onClick={ () => props.onClickCircleX(props.product.id) }
  />;
  // return <i className='far '></i>
};

Button.propTypes = {
  type: PropTypes.string,
  product: PropTypes.object,
  onClickStar: PropTypes.func,
  onClickCircleX: PropTypes.func,
};

export default Button;
