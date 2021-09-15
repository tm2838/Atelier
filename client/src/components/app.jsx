/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import './fontawesome';
import './common/fontAwesomeIcons';

import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';
import fetchProductAndStyles from '../actions/fetchProduct';
import fetchReviews from '../actions/fetchReviews';

class App extends React.Component {
  componentDidMount() {
    this.props.handleFetchProduct();
    this.props.handleFetchReviews();
  }

  render() {
    return (<div>
    <h1>Hello Atelier</h1>
    <ProductOverviewContainer />
    <RelatedProducts />
    <ProductReviews />
  </div>);
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchReviews: () => {
    dispatch(fetchReviews());
  },
  handleFetchProduct: () => {
    dispatch(fetchProductAndStyles());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
