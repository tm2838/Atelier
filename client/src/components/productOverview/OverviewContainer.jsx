import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageGallery from './Gallery/ImageGallery.jsx';
import ProductInfo from './Info/ProductInfo.jsx';
import ProductSummary from './Info/ProductSummary.jsx';
import './styles.css';

const OverviewContainer = () => (
    <div className='product-container' id='product-overview'>
      <div className='gallery-container'>
          <ImageGallery />
      </div>
      <div className='product-info-container'>
          <ProductInfo />
      </div>
      <div className='product-summary-container'>
          <ProductSummary />
      </div>
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
