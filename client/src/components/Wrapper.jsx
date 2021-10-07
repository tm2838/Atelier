import React, { useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RatingsAndReviews from './ratingsAndReviews/ratingsAndReviews.jsx';
import RelatedProductsContainer from './relatedProducts/RelatedProductsContainer.jsx';
import OverviewContainer from './productOverview/OverviewContainer.jsx';
import withClickTracker from './withClickTracker.jsx';
import fetchData from '../actions/fetchData';

const OverviewContainerWithTracker = withClickTracker(OverviewContainer, 'product-overview');
const RelatedProductsWithTracker = withClickTracker(RelatedProductsContainer, 'related-products');
const RatingsAndReviewsWithTracker = withClickTracker(RatingsAndReviews, 'ratings-and-reviews');

const Wrapper = (props) => {
  const { productId } = useParams();

  useEffect(() => {
    props.handleFetchProduct(productId);
  }, [productId]);

  return (
    <div>
      <OverviewContainerWithTracker />
      <RelatedProductsWithTracker productId={ productId }
        history={ props.history } location={props.location} />
      <RatingsAndReviewsWithTracker key={props.location.pathname} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleFetchProduct: (id) => {
    dispatch(fetchData(id));
  },
});

Wrapper.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  handleFetchProduct: PropTypes.func,
};

export default withRouter(connect(null, mapDispatchToProps)(Wrapper));
