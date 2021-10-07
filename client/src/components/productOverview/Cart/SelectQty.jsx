import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SelectQty = ({ maxQty, handleQtyChange }) => (
  (!maxQty.length)
    ? <select name='qty' id='select-qty' className='checkout' disabled>
      <option value='-'>-</option>
    </select>
    : <select name='qty' id='select-qty' className='checkout' onChange={handleQtyChange}>
      {
      maxQty.map((qty) => <option key={`qty-${qty}`} value={qty}>{qty}</option>)
      }
  </select >
);

const mapStateToProps = (state) => ({
  maxQty: state.inStockQty,
});

SelectQty.propTypes = {
  size: PropTypes.string,
  styleQty: PropTypes.array,
  maxQty: PropTypes.array,
  handleQtyChange: PropTypes.func,
};

export default connect(mapStateToProps)(SelectQty);
