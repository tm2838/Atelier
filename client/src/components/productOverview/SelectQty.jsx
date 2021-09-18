/* eslint-disable react/prop-types */
import React from 'react';

const SelectQty = () => (

  <select name='qty' id='select-qty' className='checkout'>
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        .map((qty) => <option key={qty} value={qty}>{qty}</option>)
    }
  </select>

);

export default SelectQty;
