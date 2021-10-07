import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavButton = (props) => (
    <div>
      <FontAwesomeIcon
        className='gallery-nav'
        data-testid={`gallery-nav-${props.direction}`}
        icon={props.icon}
        size='2x'
        onClick={() => props.onClick(props.direction)} />
    </div>
);

NavButton.propTypes = {
  icon: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButton;
