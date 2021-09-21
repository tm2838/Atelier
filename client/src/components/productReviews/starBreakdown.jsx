/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

import StarBreakdownBar from './starBreakdownBar.jsx';
import changeFilters from '../../actions/productReviews/changeFilters';
import { changeLoadedReviews, changeRemainingReviews } from '../../actions/productReviews/changeReviews';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(e) {
    let rating = e.target.parentNode.className;
    if (!['1', '2', '3', '4', '5'].includes(rating)) {
      rating = e.target.parentNode.parentNode.className;
    }
    const filters = [...this.props.filters];
    if (!filters.includes(rating)) {
      filters.push(rating);
    } else {
      filters.splice(filters.indexOf(rating), 1);
    }
    let reviews;
    if (filters.length === 0) {
      reviews = this.props.reviews;
    } else {
      reviews = this.props.reviews.filter(
        (review) => filters.includes(review.rating.toString()),
      );
    }
    const loadedReviews = reviews.slice(0, this.props.loadedReviews.length || 2);
    const remainingReviews = reviews.filter((review) => !loadedReviews.includes(review));
    this.props.handleFilterReview(loadedReviews, remainingReviews);
    this.props.handleAddFilter(filters);
  }

  render() {
    return (
      <>
        { this.props.reviewMeta.ratings
          && <>
          <div className={CSS['star-breakdown']}>
            <div style={{ display: 'flex' }} onClick={this.onFilter} className='5'>
              <div style={{ marginRight: '10px' }}>5 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(this.props.reviewMeta.ratings['5'] / this.props.reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{this.props.reviewMeta.ratings['5'] || 0} reviews</div>
            </div>
            <div style={{ display: 'flex' }} onClick={this.onFilter} className='4'>
              <div style={{ marginRight: '10px' }}>4 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(this.props.reviewMeta.ratings['4'] / this.props.reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{this.props.reviewMeta.ratings['4'] || 0} reviews</div>
            </div>
            <div style={{ display: 'flex' }} onClick={this.onFilter} className='3'>
              <div style={{ marginRight: '10px' }}>3 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(this.props.reviewMeta.ratings['3'] / this.props.reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{this.props.reviewMeta.ratings['3'] || 0} reviews</div>
            </div>
            <div style={{ display: 'flex' }} onClick={this.onFilter} className='2'>
              <div style={{ marginRight: '10px' }}>2 Stars</div>
              <StarBreakdownBar barStyle={{ width: `${(this.props.reviewMeta.ratings['2'] / this.props.reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{this.props.reviewMeta.ratings['2'] || 0} reviews</div>
            </div>
            <div style={{ display: 'flex' }} onClick={this.onFilter} className='1'>
              <div style={{ marginRight: '16px' }}>1 Star {' '}</div>
              <StarBreakdownBar barStyle={{ width: `${(this.props.reviewMeta.ratings['1'] / this.props.reviewMeta.totalReviews) * 100 || 0}%` }}/>
              <div>{this.props.reviewMeta.ratings['1'] || 0} reviews</div>
            </div>
          </div>
          {this.props.filters.length > 0
            && <div>Filters Applied: {this.props.filters.map((filter) => `${filter} stars `)}</div>
          }
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
