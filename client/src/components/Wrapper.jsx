import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingsAndReviews from './ratingsAndReviews/ratingsAndReviews.jsx';
import RelatedProductsContainer from './relatedProducts/RelatedProductsContainer.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';
import withClickTracker from './withClickTracker.jsx';

const OverviewContainerWithTracker = withClickTracker(OverviewContainer, 'product-overview');
const RelatedProductsWithTracker = withClickTracker(RelatedProductsContainer, 'related-products');
const RatingsAndReviewsWithTracker = withClickTracker(RatingsAndReviews, 'ratings-and-reviews');

const Wrapper = (props) => (
  <div>
    <OverviewContainerWithTracker productId={props.match.params.productId} />
    <RelatedProductsWithTracker productId={ props.match.params.productId }
      history={ props.history } location={props.location} />
    <RatingsAndReviewsWithTracker key={props.location.pathname}
      productId={ props.match.params.productId } />
  </div>
);

Wrapper.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(Wrapper);
