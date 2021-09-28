/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductRating from './ProductRating.jsx';
import ProductName from './ProductName.jsx';
import StyleList from './StyleList.jsx';
import AddToCart from './AddToCart.jsx';

const ProductInfo = ({
  product,
  styles,
  currentStyle,
  reviews,
}) => (
  (!styles.length || !Object.keys(currentStyle).length)
    ? <div>loading...</div>
    : <div className='product-info'>
      {reviews.length && <ProductRating reviewNumber={reviews.length} />}
      <ProductName
        category={product.category.toUpperCase()}
        name={product.name}
        price={currentStyle.original_price}
        sale={currentStyle.sale_price}
      />
      <StyleList />
      <AddToCart />
    </div>
);

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  styles: state.styleList,
  currentStyle: state.currentStyle,
  reviews: state.reviews,
});

ProductInfo.propTypes = {
  product: PropTypes.object,
  styles: PropTypes.array,
  currentStyle: PropTypes.object,
  reviews: PropTypes.array,
};

export default connect(mapStateToProps)(ProductInfo);
