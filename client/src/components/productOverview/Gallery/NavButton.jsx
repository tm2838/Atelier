import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavButton = ({
  className,
  icon,
  direction,
  onClick,
}) => (
    <div className={className}>
      <FontAwesomeIcon
        className='gallery-nav'
        data-testid={`gallery-nav-${direction}`}
        icon={icon}
        size='2x'
        onClick={() => onClick(direction)} />
    </div>
);

NavButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButton;
