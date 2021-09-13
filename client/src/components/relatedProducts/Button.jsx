import React from 'react';
import './styles.css';

{/* <i class="fas fa-star"></i> solid star */}
{/* <i class="far fa-star"></i> outline star */}
{/* <i class="fas fa-star-half-alt"></i> half star */}
{/* <i class="far fa-times-circle"></i> close X */}

const Button = props => {
  // if props = related product, render
  if (props.type === 'related') {
    return <i className='far fa-star'></i>
  }
  // else if props = outfit, render
  return <i className='far fa-times-circle'></i>
}

export default Button;