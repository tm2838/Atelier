import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from './ProductCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitProducts: [],
    };
    this.onClickPlus = this.onClickPlus.bind(this);
    this.onClickCircleX = this.onClickCircleX.bind(this);
  }

  onClickPlus() {
    console.log(this.props.currentProduct);
    const { outfitProducts } = this.state;
    outfitProducts.push({ product: this.props.currentProduct });
    this.setState((prevState) => ({
      ...prevState,
      outfitProducts,
    }));
  }

  onClickCircleX(id) {
    console.log('id', id);
    console.log('outfits', this.state.outfitProducts);
    const { outfitProducts } = this.state;
    let index;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < outfitProducts.length; i++) {
      console.log('outfit array id', outfitProducts[i].product.id);
      if (outfitProducts[i].product.id === id) {
        index = i;
      }
    }
    outfitProducts.splice(index, 1);
    this.setState((prevState) => ({
      ...prevState,
      outfitProducts,
    }));
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='outfit'>
        <div>YOUR OUTFIT</div>
        <div className='card'>
          <h4>Add to Outfit</h4>
          <FontAwesomeIcon icon={['fas', 'plus']} onClick={ this.onClickPlus } />
        </div>
        {this.state.outfitProducts.map((product) => (
          <ProductCard type={'outfit'} key={product.product.id}
          product={product}
          onClickCircleX={ this.onClickCircleX }
          />))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentProduct: state.currentProduct });

Outfit.propTypes = {
  currentProduct: PropTypes.object,
};

export default connect(mapStateToProps)(Outfit);
