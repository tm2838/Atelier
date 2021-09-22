import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductReviews from './productReviews/productReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import Outfit from './relatedProducts/Outfit.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';

const Wrapper = (props) => (
  <>
    <OverviewContainer />
    <RelatedProducts history={ props.history } />
    <Outfit history={ props.history } />
    <ProductReviews />
  </>
);

Wrapper.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Wrapper);
