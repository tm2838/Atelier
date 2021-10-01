import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';
import postToCart from '../../actions/productOverview/postToCart';
import changeSku from '../../actions/productOverview/selectedSku';
import changeQty from '../../actions/productOverview/selectedQty';
import changeQtyInStock from '../../actions/productOverview/inStockQty';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSizeChange(e) {
    const sku = e.target.value;
    const qtyInStock = [];
    this.props.changeSku(Number(sku));

    const max = this.props.currentStyle.skus[sku].quantity;
    if (max > 0) {
      const selectMax = max < 15 ? max : 15;
      for (let i = 1; i < selectMax; i += 1) {
        qtyInStock.push(i);
      }
      this.props.changeQtyInStock(qtyInStock);
    }
  }

  handleQtyChange(e) {
    const quantity = Number(e.target.value);
    this.props.changeQty(quantity);
  }

  handleSubmit() {
    if (this.props.selectedSku) {
      postToCart(this.props.selectedSku);
    }
  }

  render() {
    const { currentStyle } = this.props;
    return (
      <>
        <SelectSize
        skus={currentStyle.skus}
        handleSizeChange={this.handleSizeChange}/>
        <SelectQty handleQtyChange={this.handleQtyChange}/>
        <button id='add-item' className='checkout' onClick={this.handleSubmit}>ADD TO CART</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.currentProduct.id,
  currentStyle: state.currentStyle,
  selectedSku: state.selectedSku,
});

const mapDispatchToProps = (dispatch) => ({
  changeSku: (sku) => {
    dispatch(changeSku(sku));
  },
  changeQty: (quantity) => {
    dispatch(changeQty(quantity));
  },
  changeQtyInStock: (instock) => {
    dispatch(changeQtyInStock(instock));
  },
});

AddToCart.propTypes = {
  productId: PropTypes.number,
  currentStyle: PropTypes.object,
  selectedSku: PropTypes.number,
  handleAdd: PropTypes.func,
  changeSku: PropTypes.func,
  changeQty: PropTypes.func,
  changeQtyInStock: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
