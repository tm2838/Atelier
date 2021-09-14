/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';
import './common/fontAwesomeIcons';

const App = () => (
  <div>
    <h1>Hello Atelier</h1>
    <ProductOverviewContainer />
    <RelatedProducts />
    <ProductReviews />
  </div>
);

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
