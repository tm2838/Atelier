/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import { changeLoadedReviews, changeRemainingReviews, changeReviews } from '../../../actions/ratingsAndReviews/changeReviews';
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
    this.props.handleSortChange(loadedReviews, remainingReviews, reviews);
  }

  render() {
    const { loadedReviews, theme } = this.props;
    const themeClass = theme === 'LIGHT' ? CSS['sort-dropdown'] : CSS['sort-dropdown-dark'];
    return (
      <div className='sort-container' >
        {loadedReviews.length > 0
        && <div><b>{this.props.reviews.length} reviews, sorted by</b>
          <select data-testid='select' className={themeClass} onChange={this.onSortChange} defaultValue={this.state.sortedBy}>
            {this.sortingOptions.map(
              (opt) => <option key={opt} value={opt}>
                {opt}
              </option>,
            )}
          </select>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  loadedReviews: state.loadedReviews,
  remainingReviews: state.remainingReviews,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleSortChange: (loadedReviews, remainingReviews, reviews) => {
    dispatch(changeLoadedReviews(loadedReviews));
    dispatch(changeRemainingReviews(remainingReviews));
    dispatch(changeReviews(reviews));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropdown);
