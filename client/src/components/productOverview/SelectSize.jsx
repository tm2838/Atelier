import React from 'react';
import PropTypes from 'prop-types';

const SelectSize = ({ skus, handleSizeChange }) => {
  const inStock = Object.keys(skus).reduce((init, sku) => init + skus[sku].quantity, 0);
  return (
    (inStock)
      ? <select name='sizes' id='select-sizes' className='checkout' defaultValue='SELECT SIZE' onChange={handleSizeChange}>
        <option value='SELECT SIZE' disabled>SELECT SIZE</option>
        {
          Object.keys(skus).map((sku) => {
            const { size, quantity } = skus[sku];
            return quantity && <option key={sku} value={sku} id='sizes'>{size}</option>;
          })
        }
      </select>
      : <select name='sizes' id='select-sizes' className='checkout' defaultValue='OUT OF STOCK' disabled>
        <option value='OUT OF STOCK'>OUT OF STOCK</option>
      </select>
  );
};

SelectSize.propTypes = {
  skus: PropTypes.object,
  handleSizeChange: PropTypes.func,
};

export default SelectSize;
