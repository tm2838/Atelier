import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageGallery from './Gallery/ImageGallery.jsx';
import ProductInfo from './Info/ProductInfo.jsx';
import ProductSummary from './Info/ProductSummary.jsx';
import './styles.css';

const OverviewContainer = ({ imageView }) => (
  (!imageView)
    ? <div className='product-container' id='product-overview'>
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
    : <div className='product-container' id='product-overview'>
      <figure className='gallery-expanded-container'>
        <ImageGallery />
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
