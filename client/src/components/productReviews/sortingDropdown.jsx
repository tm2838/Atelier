/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';

class SortingDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.sortingOptions = ['helpful', 'newest', 'relevant'];
    this.state = {
      sortedBy: 'relevant',
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    this.setState({ sortedBy: event.target.value });
    event.target.blur();
  }

  render() {
    return (
      <div>
        <div>{this.props.reviews.length} reviews, sorted by
          <select className={CSS['sort-dropdown']} onChange={this.handleSortChange} defaultValue={this.state.sortedBy}>
            {this.sortingOptions.map(
              (opt) => <option key={opt} value={opt}>
                {opt}
              </option>,
            )}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(SortingDropdown);
