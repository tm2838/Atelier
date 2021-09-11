import React from 'react';
import Ratings from './ratings.jsx';
import ReviewsList from './reviewsList.jsx';
import ReviewButtons from './reviewButtons.jsx';

class SectionReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch('/reviews')
    .then((response) => response.json())
    .then((data) => {
      this.setState({reviews: [...data]});
      console.log(data);
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
      <h3>{'RATINGS & REVIEWS'}</h3>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
        <Ratings />
        <div>
          <ReviewsList reviews={this.state.reviews}/>
          <ReviewButtons reviews={this.state.reviews}/>
        </div>
      </div>
      </>
    )
  }
}

export default SectionReviews;