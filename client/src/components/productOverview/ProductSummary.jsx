import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProductSummary = ({ product }) => {
  const { slogan, description, features } = product;
  return (
    <div>
      <figure className='product-summary'>
        <p className='product-slogan' data-testid='product-slogan'><b>{slogan}</b></p>
        <p className='product-description' data-testid='product-description'>{description}</p>
      </figure>
      <figure className='product-features'>
        <ul>
          {
            slogan
            && features.map((item) => <li key={item.feature}>
              {item.value} {item.feature}</li>)
          }
        </ul>
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
