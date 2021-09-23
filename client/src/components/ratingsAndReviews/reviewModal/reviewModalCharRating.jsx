/* eslint-disable react/prop-types */
import React from 'react';
import CSS from '../ratingsAndReviews.module.css';

class CharRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.onSelectOption = this.onSelectOption.bind(this);
  }

  onSelectOption(e) {
    if (e.target.value === this.state.selected) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: e.target.value });
    }
  }

  render() {
    const { characteristic, options } = this.props;
    const { selected } = this.state;
    return (
      <>
        <div className={CSS['char-option-chosen']}>Current selection: {selected || 'None selected'}</div>
        <div className={CSS['char-rating-container']}>
          <div className={CSS['char-rating-title']}>{characteristic}:</div>
          {options.map((option) => <input
              key={option}
              type='radio'
              value={option}
              name={characteristic}
              checked={selected === option}
              className={CSS[`char-rating-option-${options.indexOf(option)}`]}
              onClick={this.onSelectOption}
            />)}
          <div className={CSS['char-option-indicator-0']}>{options[0]}</div>
          <div className={CSS['char-option-indicator-1']}>{options[4]}</div>
        </div>
      </>
    );
  }
}

export default CharRating;
