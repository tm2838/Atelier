import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ImageGallery from './ImageGallery.jsx';
import fetchProductAndStyles from '../../actions/fetchProduct';
import './styles.css';


class ProductOverviewContainer extends React.Component {

  componentDidMount() {
    this.props.handleFetchProduct();
  }

  render() {
    return (
      <ImageGallery />
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return { handleFetchProduct: () => {
    dispatch(fetchProductAndStyles());
  }};
};

export default connect(null, mapDispatchToProps)(ProductOverviewContainer);