/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery.jsx';
import fetchProductAndStyles from '../../actions/fetchProduct';

class ProductOverviewContainer extends React.Component {
  componentDidMount() {
    this.props.handleFetchProduct();
  }

  render() {
    return (
      <ImageGallery currentStyle={this.props.currentStyle}/>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStyle: state.styleList,
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchProduct: () => {
    dispatch(fetchProductAndStyles());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverviewContainer);
