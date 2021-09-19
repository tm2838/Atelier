import React from 'react';
import PropTypes from 'prop-types';

// shows onClick star icon
const Modal = (props) => {
  const { comparedProduct, currentProduct } = props;
  if (props.showModal === false) {
    return null;
  }
  return (
    <div className='modal' onClick={ () => props.onClickCloseModal() }>
      <p className='categoryFont'>COMPARING</p>
      <table>
        <thead>
          <tr>
            <th><b>{ currentProduct.name }</b></th>
            <th></th>
            <th><b>{ comparedProduct.product.name }</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>GMO and Pesticide-free</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>Made with 100% Genetic Modification</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>This is made up</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>It doesn&apos;t matter</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>Feature description</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>Uses React Hooks and Redux</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>Angular</td>
            <td className='check'>2</td>
          </tr>
          <tr>
            <td className='check'>1</td>
            <td className='categoryFont'>Some other product comparison metric</td>
            <td className='check'>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  comparedProduct: PropTypes.object,
  onClickCloseModal: PropTypes.func,
  currentProduct: PropTypes.object,
  name: PropTypes.string,
};

export default Modal;
