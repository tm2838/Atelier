/* eslint-disable react/prop-types */
import React from 'react';

const SelectSize = (props) => (

  <select name='sizes' id='select-sizes' className='checkout' defaultValue='SELECT SIZE'>
    <option value='SELECT SIZE' disabled>SELECT SIZE</option>
    {
      Object.keys(props.skus).map((sku) => {
        const { size } = props.skus[sku];
        return <option key={sku} value={size} id='sizes'>{size}</option>;
      })
    }
  </select>

);

export default SelectSize;
