import React from 'react';
import PropTypes from 'prop-types';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';

const RelatedProductsContainer = (props) => (
  <div id='related-products' data-testid='related-products'>
    <RelatedProducts productId={props.productId} history={props.history} />
    <Outfit history={props.history} />
  </div>
);

RelatedProductsContainer.propTypes = {
  history: PropTypes.object,
  productId: PropTypes.number,
};

export default RelatedProductsContainer;
