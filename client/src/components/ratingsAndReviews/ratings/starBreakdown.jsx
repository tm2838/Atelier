/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import '../ratingsAndReviews.css';

import StarBreakdownBar from './starBreakdownBar.jsx';
import changeFilters from '../../../actions/ratingsAndReviews/changeFilters';
import { changeLoadedReviews, changeRemainingReviews } from '../../../actions/ratingsAndReviews/changeReviews';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.onRemoveFilter = this.onRemoveFilter.bind(this);
  }

  onFilter(e) {
    let rating = e.target.parentNode.className.split(' ')[1];
    if (!['1', '2', '3', '4', '5'].includes(rating)) {
      [, rating] = e.target.parentNode.parentNode.className.split(' ');
    }
    let filters = [...this.props.filters];
    if (!filters.includes(rating)) {
      filters.push(rating);
    } else {
      filters.splice(filters.indexOf(rating), 1);
    }
    filters = filters.filter((filter) => filter);
    let reviews;
    if (filters.length === 0) {
      reviews = this.props.reviews;
    } else {
      reviews = this.props.reviews.filter(
        (review) => filters.includes(review.rating.toString()),
      );
    }
    const reviewsToLoad = this.props.loadedReviews.length > 2 ? this.props.loadedReviews.length : 2;
    const loadedReviews = reviews.slice(0, reviewsToLoad);
    const remainingReviews = reviews.filter((review) => !loadedReviews.includes(review));
    this.props.handleFilterReview(loadedReviews, remainingReviews);
    this.props.handleAddFilter(filters);
  }

  onRemoveFilter() {
    this.props.handleAddFilter([]);
    const reviewsToLoad = this.props.loadedReviews.length > 2 ? this.props.loadedReviews.length : 2;
    const loadedReviews = this.props.reviews.slice(0, reviewsToLoad);
    const remainingReviews = this.props.reviews.filter((review) => !loadedReviews.includes(review));
    this.props.handleFilterReview(loadedReviews, remainingReviews);
  }

  render() {
    const { reviewMeta, filters, theme } = this.props;
    const themeClass = theme === 'LIGHT' ? 'star-breakdown-div' : 'star-breakdown-div-dark';
    return (
      <>
        {reviewMeta.ratings
          && <>
          <div className={'star-breakdown'}>
            <div><b>Ratings Breakdown</b></div>
            {filters.length > 0
              && (
                <>
                  <div style={{ fontStyle: 'italic', color: '#92a4b3' }}>
                    Filters Applied: {filters.map((filter) => `${filter} stars `)}
                  </div>

                  <div
                    onClick={this.onRemoveFilter}
                    style={{
                      textDecoration: 'underline', fontStyle: 'italic', color: '#92a4b3', cursor: 'pointer',
                    }}>
                      Remove Filters
                  </div>
                </>
              )
            }
            <div data-testid='5-star' onClick={this.onFilter} className={`${themeClass} 5`}>
              <div style={{ marginRight: '10px', textDecoration: 'underline' }}>5 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(reviewMeta.ratings['5'] / reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{reviewMeta.ratings['5'] || 0}</div>
            </div>

            <div data-testid='4-star' onClick={this.onFilter} className={`${themeClass} 4`}>
              <div style={{ marginRight: '10px', textDecoration: 'underline' }}>4 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(reviewMeta.ratings['4'] / reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{reviewMeta.ratings['4'] || 0}</div>
            </div>

            <div data-testid='3-star' onClick={this.onFilter} className={`${themeClass} 3`}>
              <div style={{ marginRight: '10px', textDecoration: 'underline' }}>3 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(reviewMeta.ratings['3'] / reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{reviewMeta.ratings['3'] || 0}</div>
            </div>

            <div data-testid='2-star' onClick={this.onFilter} className={`${themeClass} 2`}>
              <div style={{ marginRight: '10px', textDecoration: 'underline' }}>2 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(reviewMeta.ratings['2'] / reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{reviewMeta.ratings['2'] || 0}</div>
            </div>

            <div data-testid='1-star' onClick={this.onFilter} className={`${themeClass} 1`}>
              <div style={{ marginRight: '16px', textDecoration: 'underline' }}>1 Star {' '}</div>
              <StarBreakdownBar barStyle={{ width: `${(reviewMeta.ratings['1'] / reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{reviewMeta.ratings['1'] || 0}</div>
            </div>
          </div>
          </>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta,
  filters: state.filters,
  loadedReviews: state.loadedReviews,
  remainingReviews: state.remainingReviews,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddFilter: (filters) => {
    dispatch(changeFilters(filters));
  },
  handleFilterReview: (loadedReviews, remainingReviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StarBreakdown);
