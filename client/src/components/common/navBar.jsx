import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from './commonUI.module.css';

const NavBar = () => (
  <div className={CSS['nav-bar']}>
    <FontAwesomeIcon id='logo' className={CSS.logo} icon='paw' size='4x' data-testid="logo" />
  </div>
);

export default NavBar;
