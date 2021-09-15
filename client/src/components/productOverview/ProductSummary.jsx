/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

import React from 'react';
import { connect } from 'react-redux';

class ProductSummary extends React.Component {
  render() {
    return (
      <div className='product-summary'>
        <p className='product-slogan'><b>{this.props.product.slogan}</b></p>
        <p className='product-description'>{this.props.product.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
});

export default connect(mapStateToProps)(ProductSummary);
