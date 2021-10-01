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
    this.state = {
      // sku: null,
      // size: null,
      // quantity: 0,
      // id: null,
      selected: false,
    };
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
    const quantity = e.target.value;
    this.props.changeQty(quantity);
  }

  handleSubmit() {
    if (this.props.selectedSku) {
      postToCart(this.props.selectedSku);
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     id: this.props.productId,
  //   });
  // }

  // componentDidUpdate() {
  //   if (this.state.id !== this.props.productId) {
  //     this.setState({
  //       sku: null,
  //       id: this.props.productId,
  //       selected: false,
  //     });
  //   }
  // }

  render() {
    // let styleQty = [];
    // const { sku, size } = this.state;
    const { currentStyle } = this.props;
    // const makeQtyList = (qty) => {
    //   const qtyList = [];
    //   const length = qty < 15 ? qty : 15;
    //   for (let i = 1; i <= length; i += 1) {
    //     qtyList.push(i);
    //   }
    //   return qtyList;
    // };
    // if (sku) {
    //   const currentQty = currentStyle.skus[sku].quantity || 0;
    //   styleQty = makeQtyList(currentQty);
    // }

    return (
      <>
        <SelectSize
        skus={currentStyle.skus}
        // selected={this.state.selected}
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
