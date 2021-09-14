/* eslint-disable react/prop-types */
import React from 'react';
// import { connect } from 'react-redux';
import './common/fontAwesomeIcons';

import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';

const App = () => (
  <div>
    <h1>Hello Atelier</h1>
    <ProductOverviewContainer />
    <RelatedProducts />
    <ProductReviews />
  </div>
);

export default App;
