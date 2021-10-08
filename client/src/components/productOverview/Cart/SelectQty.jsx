import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SelectQty = ({ maxQty, handleQtyChange, theme }) => {
  const themeBtnClass = theme === 'LIGHT' ? 'checkout' : 'checkout-dark';
  return (
    (!maxQty.length)
      ? <select name='qty' id='select-qty' className={themeBtnClass} disabled>
          <option value='-'>-</option>
        </select>
      : <select name='qty' id='select-qty' className={themeBtnClass} onChange={handleQtyChange}>
          {
          maxQty.map((qty) => <option key={`qty-${qty}`} value={qty}>{qty}</option>)
          }
        </select >
  );
};

const mapStateToProps = (state) => ({
  maxQty: state.inStockQty,
  theme: state.theme,
});

SelectQty.propTypes = {
  size: PropTypes.string,
  styleQty: PropTypes.array,
  maxQty: PropTypes.array,
  handleQtyChange: PropTypes.func,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(SelectQty);
