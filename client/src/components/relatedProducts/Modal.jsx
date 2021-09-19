import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// shows onClick star icon
const Modal = (props) => {
  const { comparedProduct, currentProduct } = props;
  const features = {};
  if (comparedProduct.product !== undefined && comparedProduct.product.features !== undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < currentProduct.features.length; i++) {
      if (currentProduct.features[i].value === true) {
        currentProduct.features[i].value = <FontAwesomeIcon icon={'faCheck'} />;
      } else if (currentProduct.features[i].value === false) {
        currentProduct.features[i].value = '';
      }
      features[currentProduct.features[i].feature] = {
        currentProduct: currentProduct.features[i].value,
      };
    }
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < comparedProduct.product.features.length; j++) {
      if (comparedProduct.product.features[j].value === true) {
        comparedProduct.product.features[j].value = <FontAwesomeIcon icon={'faCheck'} />;
      } else if (comparedProduct.product.features[j].value === false) {
        comparedProduct.product.features[j].value = '';
      }
      features[comparedProduct.product.features[j].feature] = {
        comparedProduct: comparedProduct.product.features[j].value,
      };
    }
  }

  const keys = Object.keys(features);
  // eslint-disable-next-line react/jsx-key
  const rows = keys.map((key) => (
      // eslint-disable-next-line react/jsx-key
      <tr className='features'>
        <td className='check'>{features[key].currentProduct}</td>
        <td>{key}</td>
        <td className='check'>{features[key].comparedProduct}</td>
      </tr>
  ));

  if (props.showModal === false) {
    return null;
  }
  return (
    <div className='modal' onClick={ () => props.onClickCloseModal() }>
      <p style={{ fontSize: '0.8em' }}>COMPARING</p>
      <table>
        <thead>
          <tr>
            <th><b>{ currentProduct.name }</b></th>
            <th></th>
            <th><b>{ comparedProduct.product.name }</b></th>
          </tr>
        </thead>
        <tbody>
          { rows }
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
