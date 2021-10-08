import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SelectSize = ({
  skus, inStock, handleSizeChange, theme,
}) => {
  const themeBtnClass = theme === 'LIGHT' ? 'checkout' : 'checkout-dark';
  return (
    (inStock)
      ? <select
    name='sizes'
    id='select-sizes'
    className={themeBtnClass}
    data-testid='select-sizes'
    defaultValue='SELECT SIZE'
    onChange={handleSizeChange}
    >
      <option value='SELECT SIZE' disabled>SELECT SIZE</option>
      {
        Object.keys(skus).map((sku) => {
          const { size, quantity } = skus[sku];
          return quantity && <option key={sku} value={sku} id='sizes'>{size}</option>;
        })
      }
    </select>
      : <select name='sizes' id='select-sizes' className={themeBtnClass} defaultValue='OUT OF STOCK' disabled>
      <option value='OUT OF STOCK'>OUT OF STOCK</option>
    </select>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

SelectSize.propTypes = {
  skus: PropTypes.object,
  inStock: PropTypes.number,
  handleSizeChange: PropTypes.func,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(SelectSize);
