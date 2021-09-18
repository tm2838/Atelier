/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductSummary from './ProductSummary.jsx';
import fetchProductAndStyles from '../../actions/fetchProduct';
import './styles.css';

class OverviewContainer extends React.Component {
  componentDidMount() {
    this.props.handleFetchProduct();
  }

  render() {
    return (
      <div className='product-container'>
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFetchProduct: () => {
    dispatch(fetchProductAndStyles());
  },
});

export default connect(null, mapDispatchToProps)(OverviewContainer);
