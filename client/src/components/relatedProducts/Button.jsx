import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const Button = (props) => {
  console.log('button', props);
  // if props = related product, render
  if (props.type === 'related') {
    return <FontAwesomeIcon icon={['far', 'star']} className='icon'
      onClick={ () => props.onClickStar(props.product) } />;
  }
  // else if props = outfit, render
  return <FontAwesomeIcon icon={['far', 'times-circle']} className='icon'
    onClick={ () => props.onClickCircleX(props.product.id) }
  />;
};

Button.propTypes = {
  type: PropTypes.string,
  product: PropTypes.object,
  onClickStar: PropTypes.func,
  onClickCircleX: PropTypes.func,
};

export default Button;
