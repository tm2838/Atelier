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
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.sku) {
      this.props.handleAdd(this.state.sku);
    }
  }

  render() {
    let styleQty = [];
    const { size } = this.state;
    const { currentStyle } = this.props;
    const makeQtyList = (qty) => {
      const qtyList = [];
      const length = qty < 15 ? qty : 15;
      for (let i = 1; i <= length; i += 1) {
        qtyList.push(i);
      }
      return qtyList;
    };
    if (size) {
      styleQty = makeQtyList(currentStyle.quantity);
    }

    return (
      <>
        <SelectSize skus={currentStyle.skus} handleSizeChange={this.handleSizeChange}/>
        <SelectQty size={size} styleQty={styleQty} handleQtyChange={this.handleQtyChange}/>
        <button id='add-item' className='checkout'>ADD TO BAG</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (sku) => {
    dispatch(postToCart(sku));
  },
});

AddToCart.propTypes = {
  currentStyle: PropTypes.object,
  handleAdd: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
