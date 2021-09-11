import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ImageGallery from './ImageGallery.jsx';
import fetchProduct from '../../actions/fetchProduct';

class ProductOverviewContainer extends React.Component {

  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    return (
      <ImageGallery currentStyle={this.props.currentStyle}/>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentStyle: state.styleList
  }
};

const mapDispatchToProps = (dispatch) => {
  return { handleFetch: () => {
    dispatch(fetchProduct());
  }};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverviewContainer);