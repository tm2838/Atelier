/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import '../ratingsAndReviews.css';

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
    this.props.handleChange(e);
  }

  render() {
    const { characteristic, options, theme } = this.props;
    const { selected } = this.state;
    const themeSelected = theme === 'LIGHT' ? 'char-option-chosen' : 'char-option-chosen-dark';
    return (
      <>
        <div className={themeSelected}>Current selection: {selected || 'None selected'}</div>
        <div className='char-rating-container'>
          <div className='char-rating-title'>{characteristic}:</div>
          {options.map((option) => <input
              data-testid={`option-${options.indexOf(option) + 1}`}
              key={option}
              type='radio'
              value={option}
              name={characteristic}
              checked={selected === option}
              className={`${`char-rating-option-${options.indexOf(option)}`} ${options.indexOf(option)}`}
              onChange={this.onSelectOption}
            />)}
          <div className='char-option-indicator-0'>{options[0]}</div>
          <div className='char-option-indicator-1'>{options[4]}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(CharRating);
