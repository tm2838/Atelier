import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import exampleActionCreator from '../actions/placeholder';
import ProductReviews from './productReviews/productReviews.jsx';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello {this.props.placeholder}</h1>
        <ProductOverviewContainer />
        <ProductReviews />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App);