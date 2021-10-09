import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductSummary = ({ product }) => {
  const { slogan, description, features } = product;
  return (
    <div className='product-text'>
      <figure className='product-summary'>
        <p className='product-slogan' data-testid='product-slogan'><b>{slogan}</b></p>
        <p className='product-description' data-testid='product-description'>{description}</p>
      </figure>
      <figure className='product-features'>

        {
          slogan
          && features.map((item) => (
            <div className='feature' key={item.feature}>
              <FontAwesomeIcon
                className='product-feature-icon'
                data-testid='product-feature-icon'
                icon='check'
              />
              <span>
                {item.value} {item.feature}</span>
            </div>
          ))
        }
      </figure>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.currentProduct,
});

ProductSummary.propTypes = {
  product: PropTypes.object,
};

export default connect(mapStateToProps)(ProductSummary);
