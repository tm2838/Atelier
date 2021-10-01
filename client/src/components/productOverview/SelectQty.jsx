import React from 'react';
import PropTypes from 'prop-types';

const SelectQty = ({ size, styleQty, handleQtyChange }) => (
  (!size)
    ? <select name='qty' id='select-qty' className='checkout' disabled>
      <option value='-'>-</option>
    </select>
    : <select name='qty' id='select-qty' className='checkout' onChange={handleQtyChange}>
      {
      styleQty.map((qty) => <option key={`style${qty}`} value={qty}>{qty}</option>)
      }
  </select >

);

SelectQty.propTypes = {
  size: PropTypes.string,
  styleQty: PropTypes.array,
  handleQtyChange: PropTypes.func,
};

export default SelectQty;
