import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './styles.css';

// shows onClick star icon
const Modal = (props) => {
  const { comparedProduct, currentProduct, theme } = props;
  const themeModalClass = theme === 'LIGHT' ? 'modal' : 'modal-dark';
  const features = {};
  if (comparedProduct.product !== undefined && comparedProduct.product.features !== undefined) {
    for (let i = 0; i < currentProduct.features.length; i += 1) {
      features[currentProduct.features[i].feature] = {
        currentProduct: currentProduct.features[i].value,
      };
    }
    for (let j = 0; j < comparedProduct.product.features.length; j += 1) {
      if (!features[comparedProduct.product.features[j].feature]) {
        features[comparedProduct.product.features[j].feature] = {
          comparedProduct: comparedProduct.product.features[j].value,
        };
      } else {
        features[comparedProduct.product.features[j].feature].comparedProduct = (
          comparedProduct.product.features[j].value
        );
      }
    }
  }

  const keys = Object.keys(features);
  // eslint-disable-next-line react/jsx-key
  const rows = keys.map((key) => {
    if (features[key].currentProduct === null && features[key].comparedProduct === null) {
      return (
        <tr className='features'>
          <td className='check'>
            <FontAwesomeIcon data-testid='checkMark' icon='check' />
          </td>
          <td>{key}</td>
          <td className='check'><FontAwesomeIcon data-testid='checkMark' icon='check' /></td>
        </tr>
      );
    // eslint-disable-next-line no-else-return
    } else if (features[key].comparedProduct === null) {
      return (
        <tr className='features'>
          <td className='check'>{ features[key].currentProduct }</td>
          <td>{key}</td>
          <td className='check'>
            <FontAwesomeIcon data-testid='checkMark' icon='check' />
          </td>
        </tr>
      );
    } else if (features[key].currentProduct === null) {
      return (
        <tr className='features'>
          <td className='check'>
            <FontAwesomeIcon data-testid='checkMark' icon='check' />
          </td>
          <td>{key}</td>
          <td className='check'>{ features[key].comparedProduct }</td>
        </tr>
      );
    } else {
      return (
        // eslint-disable-next-line react/jsx-key
        <tr className='features'>
          <td className='check'>{features[key].currentProduct}</td>
          <td>{key}</td>
          <td className='check'>{features[key].comparedProduct}</td>
      </tr>
      );
    }
  });

  if (props.showModal === false) {
    return null;
  }
  return (
    <div className={themeModalClass} onClick={ () => props.onClickCloseModal() }>
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

const mapStateToProps = (state) => ({
  theme: state.theme,
});

Modal.propTypes = {
  showModal: PropTypes.bool,
  comparedProduct: PropTypes.object,
  onClickCloseModal: PropTypes.func,
  currentProduct: PropTypes.object,
  name: PropTypes.string,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(Modal);
