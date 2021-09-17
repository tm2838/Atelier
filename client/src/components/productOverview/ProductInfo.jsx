/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';

import ProductRating from './ProductRating.jsx';
import ProductName from './ProductName.jsx';
import StyleList from './StyleList.jsx';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';

class ProductInfo extends React.Component {
  render() {
    return (
      (this.props.styles.length === 0)
        ? <div>loading...</div>
        : <div className='product-info'>
          {this.props.reviews.length && <ProductRating reviewNumber={this.props.reviews.length}/>}
          <ProductName
            category={this.props.product.category.toUpperCase()}
            name={this.props.product.name}
            price={this.props.styles[0].original_price}
            sale={this.props.styles[0].sale_price}
          />
          <StyleList />
          <SelectSize skus={this.props.styles[0].skus}/>
          <SelectQty />
          <button>ADD TO BAG</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  styles: state.styleList,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(ProductInfo);
