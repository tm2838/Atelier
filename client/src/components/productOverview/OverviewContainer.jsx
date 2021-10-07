/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductSummary from './ProductSummary.jsx';
import './styles.css';

// eslint-disable-next-line arrow-body-style
const OverviewContainer = () => (
  <div className='product-container' id='product-overview'>
    <figure className='gallery-container'>
      <ImageGallery />
    </figure>
    <figure className='product-info-container'>
      <ProductInfo />
    </figure>
    <figure className='product-summary-container'>
      <ProductSummary />
    </figure>
  </div>
);

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
});

export default connect(mapStateToProps)(OverviewContainer);
