import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      relatedProducts: [],
      showModal: false,
      comparedProduct: {
        product: {},
        styles: {},
      },
    };
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
    return (
      <div>
        <div>RELATED PRODUCTS</div>
        {this.state.relatedProducts.map((product) => <ProductCard type={'related'} key={product.product.id}
          product={product}
          onClickStar={ this.onClickStar }
          />)
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
