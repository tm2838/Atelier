/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import ProductReviews from './productReviews/productReviews.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';
import './common/fontAwesomeIcons';
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
