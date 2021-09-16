/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import './common/fontAwesomeIcons';

import Banner from './common/banner.jsx';
import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';

const App = () => (
  <div>
    <Banner />
    <OverviewContainer />
    <RelatedProducts />
    <ProductReviews />
  </div>
);

export default App;
