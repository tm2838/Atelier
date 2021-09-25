import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingsAndReviews from './ratingsAndReviews/ratingsAndReviews.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import Outfit from './relatedProducts/Outfit.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';
import withClickTracker from './withClickTracker.jsx';

const OverviewContainerWithTracker = withClickTracker(OverviewContainer, 'product-overview');
const RelatedProductsWithTracker = withClickTracker(RelatedProducts, 'related-products');
const RatingsAndReviewsWithTracker = withClickTracker(RatingsAndReviews, 'ratings-and-reviews');

const Wrapper = (props) => (
  <div key={props.location.pathname}>
    <OverviewContainerWithTracker />
    <RelatedProductsWithTracker history={ props.history } />
    <Outfit history={ props.history } />
    <RatingsAndReviewsWithTracker productId={ props.match.params.productId } />
  </div>
);

Wrapper.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(Wrapper);
