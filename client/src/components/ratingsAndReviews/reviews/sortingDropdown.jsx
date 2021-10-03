/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import { changeLoadedReviews, changeRemainingReviews } from '../../../actions/ratingsAndReviews/changeReviews';
import { sortHelpful, sortNewest, sortRelevant } from '../../../helpers/sortReviews';

class SortingDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.sortingOptions = ['helpful', 'newest', 'relevant'];
    this.state = {
      sortedBy: 'relevant',
    };
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(event) {
    this.setState({ sortedBy: event.target.value });
    event.target.blur();

    let reviews;
    if (event.target.value === 'helpful') {
      reviews = sortHelpful(this.props.reviews);
    } else if (event.target.value === 'newest') {
      reviews = sortNewest(this.props.reviews);
    } else {
      reviews = sortRelevant(this.props.reviews);
    }
    const loadedReviews = reviews.slice(0, this.props.loadedReviews.length || 2);
    const remainingReviews = reviews.filter((review) => !loadedReviews.includes(review));
    this.props.handleSortChange(loadedReviews, remainingReviews);
  }

  render() {
    const { loadedReviews } = this.props;
    return (
      <div className='sort-container' >
        {loadedReviews.length > 0
        && <div>{this.props.reviews.length} reviews, sorted by
          <select data-testid='select' className={CSS['sort-dropdown']} onChange={this.onSortChange} defaultValue={this.state.sortedBy}>
            {this.sortingOptions.map(
              (opt) => <option key={opt} value={opt}>
                {opt}
              </option>,
            )}
          </select>
        </div>}
        {loadedReviews.length === 0 && <div>No reviews available</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  loadedReviews: state.loadedReviews,
  remainingReviews: state.remainingReviews,
});

const mapDispatchToProps = (dispatch) => ({
  handleSortChange: (loadedReviews, remainingReviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);
