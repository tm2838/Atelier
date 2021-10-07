<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

=======
/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';
>>>>>>> dev
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductSummary from './ProductSummary.jsx';
import './styles.css';

<<<<<<< HEAD
const OverviewContainer = (props) => {
  const { productId } = useParams();

  useEffect(() => {
    props.handleFetchProduct(productId);
  }, [productId]);

  return (
    <div className='product-container' id='product-overview'>
      {
      (!props.imageView)
        ? <>
        <figure className='gallery-container'>
          <ImageGallery />
        </figure>
        <figure className='product-info-container'>
          <ProductInfo />
        </figure>
        </>
        : <>
      <figure className='gallery-expanded-container'>
        <ImageGallery />
      </figure>
      </>
      }
      <figure className='product-summary-container'>
        <ProductSummary />
      </figure>
    </div >
  );
};

const mapStateToProps = (state) => ({
  imageView: state.imageView,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchProduct: (id) => {
    dispatch(fetchProductAndStyles(id));
  },
});

OverviewContainer.propTypes = {
  imageView: PropTypes.bool,
  handleFetchProduct: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
=======
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
>>>>>>> dev
