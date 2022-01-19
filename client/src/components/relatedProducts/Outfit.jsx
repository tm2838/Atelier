import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from './ProductCard.jsx';
import './styles.css';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitProducts: [],
      index: 0,
    };
    this.onClickCard = this.onClickCard.bind(this);
    this.onClickPlus = this.onClickPlus.bind(this);
    this.onClickCircleX = this.onClickCircleX.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  onClickCard(id) {
    this.props.history.push(`/product/${id}`);
  }

  onClickPlus() {
    const { outfitProducts } = this.state;
    for (let i = 0; i < outfitProducts.length; i += 1) {
      if (outfitProducts[i].product.id === this.props.currentProduct.id) {
        // eslint-disable-next-line no-alert
        alert('product already in your outfit');
        return;
      }
    }
    outfitProducts.push({
      product: this.props.currentProduct,
      styles: this.props.currentStyle,
    });
    this.setState((prevState) => ({
      ...prevState,
      outfitProducts,
    }));
  }

  onClickCircleX(id) {
    const { outfitProducts } = this.state;
    let index;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < outfitProducts.length; i++) {
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

  onClickLeft() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onClickRight() {
    if (this.state.index < this.state.outfitProducts.length - 3) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { theme } = this.props;
    const themeCardClass = theme === 'LIGHT' ? 'card addCard' : 'card-dark addCard';
    const { index } = this.state;
    const endRangeLimit = this.state.outfitProducts.length - 3;
    const productRange = this.state.outfitProducts.slice(index, index + 3);
    return (
      <div className='carousel'>
        <h3 className='carouselHeading'>YOUR OUTFIT</h3>
        <div className='left'>
          { index ? <FontAwesomeIcon className='arrow left' data-testid='left-arrow'
              icon={ faChevronLeft } onClick={this.onClickLeft}/> : ''
          }
        </div>
        <div style={{ gridRowStart: 2, gridRowEnd: 3 }}>
          <div className='icon'></div>
          <div className={themeCardClass}>
              <p><b>Add to Outfit</b></p>
              <FontAwesomeIcon icon={['fas', 'plus']} onClick={ this.onClickPlus } />
          </div>
        </div>
        <div className='outfitCardContainer'>
          {productRange.map((product) => (
            <ProductCard type={'outfit'} key={product.product.id}
            product={product}
            onClickCircleX={ this.onClickCircleX }
            onClickCard={ this.onClickCard }
            />))
          }
        </div>
        <div className='right'>
          {index < endRangeLimit && <FontAwesomeIcon className='arrow right' data-testid='right-arrow'
              icon={ faChevronRight } onClick={this.onClickRight} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  theme: state.theme,
});

Outfit.propTypes = {
  currentProduct: PropTypes.object,
  currentStyle: PropTypes.object,
  history: PropTypes.object,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(Outfit);
