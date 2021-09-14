/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from './ImageGallery.jsx';

class ProductOverviewContainer extends React.Component {
  render() {
    return (
      <ImageGallery currentStyle={this.props.currentStyle}/>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStyle: state.styleList,
});

export default connect(mapStateToProps)(ProductOverviewContainer);
