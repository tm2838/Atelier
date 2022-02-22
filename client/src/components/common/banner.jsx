/* eslint-disable react/prop-types */
import React from 'react';

const placeHolderMessage = 'SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT';

const Banner = ({ message = placeHolderMessage }) => (
  <div style={{ textAlign: 'center' }}>
    <p>{message}</p>
  </div>
);

export default Banner;
