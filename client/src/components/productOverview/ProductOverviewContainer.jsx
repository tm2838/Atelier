/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import './styles.css';

class ProductOverviewContainer extends React.Component {
  render() {
    return (
      <ImageGallery />
    );
  }
}

export default ProductOverviewContainer;
