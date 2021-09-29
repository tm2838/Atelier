import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';
import postToCart from '../../actions/productOverview/postToCart';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: null,
      size: null,
      quantity: 0,
      id: null,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSizeChange(e) {
    this.setState({
      sku: Number(e.target.value),
      size: e.target.selectedOptions[0].text,
    });
  }

  handleQtyChange(e) {
    this.setState({
      quantity: Number(e.target.value),
    });
  }

  handleSubmit() {
    if (this.state.sku) {
      postToCart(this.state.sku);
      this.setState({
        sku: null,
        size: null,
        quantity: 0,
      });
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.productId,
    });
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.productId) {
      this.setState({
        sku: null,
        id: this.props.productId,
      });
    }
  }

  render() {
    let styleQty = [];
    const { sku, size } = this.state;
    const { currentStyle } = this.props;
    const makeQtyList = (qty) => {
      const qtyList = [];
      const length = qty < 15 ? qty : 15;
      for (let i = 1; i <= length; i += 1) {
        qtyList.push(i);
      }
      return qtyList;
    };
    if (sku) {
      const currentQty = currentStyle.skus[sku].quantity || 0;
      styleQty = makeQtyList(currentQty);
    }

    return (
      <>
        <SelectSize skus={currentStyle.skus} handleSizeChange={this.handleSizeChange}/>
        <SelectQty size={size} styleQty={styleQty} handleQtyChange={this.handleQtyChange}/>
        <button id='add-item' className='checkout' onClick={this.handleSubmit}>ADD TO BAG</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.currentProduct.id,
  currentStyle: state.currentStyle,
});

AddToCart.propTypes = {
  productId: PropTypes.number,
  currentStyle: PropTypes.object,
  handleAdd: PropTypes.func,
};

export default connect(mapStateToProps)(AddToCart);
