/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './fontawesome';
import './styles.css';
import './common/fontAwesomeIcons';

import ProductReviews from './productReviews/productReviews.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';

const App = () => (
  <div>
    <h1>Hello Atelier</h1>
    <ProductOverviewContainer />
    <ProductReviews />
  </div>
);

export default connect(mapStateToProps)(App);
