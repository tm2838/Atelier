import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageGallery from './Gallery/ImageGallery.jsx';
import ProductInfo from './Info/ProductInfo.jsx';
import ProductSummary from './Info/ProductSummary.jsx';
import './styles.css';
import ErrorBoundary from '../common/ErrorBoundary.jsx';

const OverviewContainer = () => (
  <div className='product-container' id='product-overview'>
    <figure className='gallery-container'>
      <ErrorBoundary>
        <ImageGallery />
      </ErrorBoundary>
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
  imageView: state.imageView,
});

OverviewContainer.propTypes = {
  currentProduct: PropTypes.object,
  imageView: PropTypes.bool,
};

export default connect(mapStateToProps)(OverviewContainer);
