import React from 'react';
import PropTypes from 'prop-types';

// shows onClick star icon
const Modal = (props) => {
  const { comparedProduct } = props;
  if (props.showModal === false) {
    return null;
  }
  return (
    <div>
      <p>COMPARING</p>
      <button onClick={ () => props.onClickCloseModal() }>Close</button>
      <table>
        <thead>
          <tr>
            <th><b>Current Product short name</b></th>
            <th></th>
            <th><b>{ comparedProduct.product?.name || '' }</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GMO and Pesticide-free</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Made with 100% Genetic Modification</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>This is made up</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>It doesn&apos;t matter</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Feature description</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Uses React Hooks and Redux</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Angular</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Some other product comparison metric</td>
            <td>2</td>
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
};

export default Modal;
