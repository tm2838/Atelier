/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './common/fontAwesomeIcons';

import Banner from './common/banner.jsx';
import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import Outfit from './relatedProducts/Outfit.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';

const App = () => (
  <Router>
    <Banner />
    <Switch>
      <Route exact path='/product/:productId'>
        <OverviewContainer />
        <RelatedProducts />
        <Outfit />
        <ProductReviews />
      </Route>
    </Switch>
  </Router>
);

export default App;
