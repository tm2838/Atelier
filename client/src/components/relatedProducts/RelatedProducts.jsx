import React from 'react';
import { connect } from 'react-redux';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      relatedProducts: [],
      index: 0,
      showModal: false,
      comparedProduct: {
        product: {
          name: '',
        },
        styles: {
          results: [{ url: null }],
        },
      },
    };
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.onClickStar = this.onClickStar.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  // get product id from overview
  componentDidMount() {
    fetch('http://127.0.0.1:3000/relatedProducts')
      .then((res) => res.json())
      .then((relatedProducts) => {
        this.setState((prevState) => ({
          ...prevState,
          relatedProducts,
          comparedProduct: {
            name: '',
            features: [],
          },
        }));
      })
      .catch((err) => {
        throw err;
      });
  }

  onClickLeft() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onClickRight() {
    if (this.state.index < this.state.relatedProducts.length - 4) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  onClickStar(product) {
    this.setState((prevState) => ({
      ...prevState,
      showModal: true,
      comparedProduct: product,
    }));
  }

  onClickCloseModal() {
    this.setState((prevState) => ({ ...prevState, showModal: false }));
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { index } = this.state;
    const endRangeLimit = this.state.relatedProducts.length - 4;
    const productRange = this.state.relatedProducts.slice(index, index + 4);
    return (
      <div className='relatedProducts'>
        <div>RELATED PRODUCTS</div>
        { index ? <FontAwesomeIcon className='arrow left' data-testid='left-arrow'
            icon={ faChevronLeft } onClick={this.onClickLeft}/> : ''
        }
        {productRange.map((product) => <ProductCard type={'related'} key={product.product.id}
          product={ product }
          onClickStar={ this.onClickStar }
          />)
        }
        {index < endRangeLimit && <FontAwesomeIcon className='arrow right' data-testid='right-arrow'
            icon={ faChevronRight } onClick={this.onClickRight} />
        }
        <Modal showModal= { this.state.showModal }
          comparedProduct={ this.state.comparedProduct }
          currentProduct={ this.props.currentProduct }
          onClickCloseModal={ this.onClickCloseModal } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentProduct: state.currentProduct });

RelatedProducts.propTypes = {
  currentProduct: PropTypes.object,
};

export default connect(mapStateToProps)(RelatedProducts);
