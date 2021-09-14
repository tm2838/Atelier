/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../common/starRating.jsx';

class ProductInfo extends React.Component {
  render() {
    return (
      (this.props.styles.length === 0)
        ? <div>loading...</div>
        : <div className='product-info'>
          <StarRating /> <a>Read all reviews</a>
          <p className='product-category'>{this.props.product.category}</p>
          <h1 className='product-name'>{this.props.product.name}</h1>
          <p className='price'>{this.props.product.default_price}</p>
          <p><em>STYLE &gt; {this.props.styles[0].name}</em></p>
          <li></li>
          <select></select>
          <select></select>
          <button>ADD TO BAG</button>
        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  styles: state.styleList,
});

export default connect(mapStateToProps)(ProductInfo);
