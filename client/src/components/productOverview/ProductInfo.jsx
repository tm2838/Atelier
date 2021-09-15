/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';

import StarRating from '../common/starRating.jsx';
import ProductTitle from './ProductTitle.jsx';
import ProductStyle from './ProductStyle.jsx';

class ProductInfo extends React.Component {
  render() {
    return (
      (this.props.styles.length === 0)
        ? <div>loading...</div>
        : <div className='product-info'>
          <div className='rating-overview'>
            <StarRating />
            <a><u>Read all reviews</u></a>
          </div>
          <ProductTitle
            category={this.props.product.category.toUpperCase()}
            name={this.props.product.name}
            price={this.props.product.default_price}
          />
          <ProductStyle />
          <label htmlFor='sizes'></label>
          <select name='sizes' id='sizes'>
            <option value="none" selected disabled hidden>
              SELECT SIZE
            </option>
          </select>
          <label htmlFor='qty'></label>
          <select name='qty' id='qty'>
            <option value="1" selected>
              1
            </option>
          </select>
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
