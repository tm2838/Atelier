import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './commonUI.module.css';

const Banner = () => (
  <div className={CSS.banner}>
    <FontAwesomeIcon className={CSS.logo} icon='paw' size='4x' data-testid="logo"/>
  </div>
);

export default Banner;
