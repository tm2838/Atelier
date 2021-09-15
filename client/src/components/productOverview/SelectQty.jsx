/* eslint-disable react/prop-types */
import React from 'react';

const SelectQty = () => (

  <select name='qty' id='qty'>
    {
      [1, 2, 3, 4, 5].map((qty) => <option key={qty} value={qty}>{qty}</option>)
    }
  </select>

);

export default SelectQty;
