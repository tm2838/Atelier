import React from 'react';
import { connect } from 'react-redux';
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
        product: {
          name: '',
        },
        styles: {},
      },
    };
    this.onClickStar = this.onClickStar.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  // get product id from overview
  componentDidMount() {
    // make api call to related products; reset state to empty arrays
    const newArray = [];
    fetch('http://127.0.0.1:3000/relatedProducts') // get request to server route
      .then((res) => res.json())
      .then((ids) => {
        ids.forEach((id) => {
          fetch(`http://127.0.0.1:3000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
              newArray.push(data);
            })
            .then(() => {
              this.setState((prevState) => ({
                ...prevState,
                relatedProductIds: ids,
                relatedProducts: newArray,
                comparedProduct: {},
              }));
            });
        });
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
        onClickCloseModal={ this.state.onClickCloseModal } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentProduct: state.currentProduct });

export default connect(mapStateToProps)(RelatedProducts);
