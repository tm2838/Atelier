/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import ProductOverviewContainer from './productOverview/ProductOverviewContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.placeholder}</h1>
        <ProductOverviewContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
