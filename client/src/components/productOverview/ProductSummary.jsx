/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

import React from 'react';
import { connect } from 'react-redux';

class ProductSummary extends React.Component {
  render() {
    const { slogan, description, features } = this.props.product;
    return (
      <div>
        <figure className='product-summary'>
          <p className='product-slogan'><b>{slogan}</b></p>
          <p className='product-description'>{description}</p>
        </figure>
        <figure className='product-features'>
          <ul>
            {
              this.props.product.slogan
              && features.map((item) => <li key={item.feature}>
                {item.value} {item.feature}</li>)
            }
          </ul>
        </figure>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
});

export default connect(mapStateToProps)(ProductSummary);
