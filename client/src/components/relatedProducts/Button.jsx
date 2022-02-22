import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const Button = (props) => (
  <>
   {props.type === 'related' && <FontAwesomeIcon icon={['far', 'star']} onClick={ () => props.onClickStar(props.product) } />}
   {props.type === 'outfit' && <FontAwesomeIcon icon={['far', 'times-circle']} onClick={ () => props.onClickCircleX(props.product.id) } />}
  </>
);

Button.propTypes = {
  type: PropTypes.string,
  product: PropTypes.object,
  onClickStar: PropTypes.func,
  onClickCircleX: PropTypes.func,
};

export default Button;
