import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ImageGallery from './ImageGallery.jsx';
import fetchProductAndStyles from '../../actions/fetchProduct';

class ProductOverviewContainer extends React.Component {

  componentDidMount() {
    this.props.handleFetchProduct();
  }

  render() {
    return (
      <ImageGallery id={this.props.id} currentStyle={this.props.currentStyle}/>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentStyle: state.styleList,
    id: state.currentProduct.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return { handleFetchProduct: () => {
    dispatch(fetchProductAndStyles());
  }};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverviewContainer);