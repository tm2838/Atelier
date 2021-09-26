/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from '../ratingsAndReviews.module.css';
import ProductBreakdownBar from './productBreakdownBar.jsx';

const ProductBreakdown = ({ reviewMeta }) => {
  const options = {
    Size: ['Too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'Too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };
  return (
    <div className={CSS['product-breakdown']}>
      {reviewMeta.characteristics && Object.keys(reviewMeta.characteristics)
        .map(
          (key) => <ProductBreakdownBar
              key={key}
              characteristic={key}
              options={options[key]}
              point={reviewMeta.characteristics[key].value} />,
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviewMeta: state.reviewMeta,
});

export default connect(mapStateToProps)(ProductBreakdown);
