/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductSummary from './ProductSummary.jsx';
import fetchProductAndStyles from '../../actions/fetchProduct';
import './styles.css';

const OverviewContainer = (props) => {
  const { productId } = useParams();

  useEffect(() => {
    props.handleFetchProduct(productId);
  }, [productId]);

  return (
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
};

const mapDispatchToProps = (dispatch) => ({
  handleFetchProduct: (id) => {
    dispatch(fetchProductAndStyles(id));
  },
});

export default connect(null, mapDispatchToProps)(OverviewContainer);
