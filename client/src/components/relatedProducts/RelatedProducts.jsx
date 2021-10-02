import React from 'react';
import { connect } from 'react-redux';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import Modal from './Modal.jsx';
import './styles.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      relatedProducts: [],
      index: null,
      showModal: false,
      comparedProduct: {
        product: {
          id: 0,
          name: '',
        },
        styles: {
          results: [{ url: null }],
        },
      },
    };
    this.fetchRelatedProducts = this.fetchRelatedProducts.bind(this);
    this.onClickCard = this.onClickCard.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.onClickStar = this.onClickStar.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  // get product id from overview
  componentDidMount() {
    this.fetchRelatedProducts(this.props.productId);
  }

  fetchRelatedProducts(id) {
    fetch(`/relatedProducts/${id}`)
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
        console.log(err);
      });
  }

  onClickCard(id) {
    this.setState({
      showModal: false,
    });
    this.props.history.push(`/product/${id}`);
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
      <div className='carousel'>
        <div className='carouselHeading'>RELATED PRODUCTS</div>
        <div className='left'>
          { index ? <FontAwesomeIcon data-testid='left-arrow'
              icon={ faChevronLeft } onClick={this.onClickLeft}/> : ''
          }
        </div>
        <div className="relatedCardContainer">
          {productRange.map((product) => <ProductCard type={'related'} key={product.product.id}
            product={ product }
            onClickStar={ this.onClickStar }
            onClickCard={ this.onClickCard }
            />)
          }
        </div>
        <div className='right'>
          {index < endRangeLimit ? <FontAwesomeIcon data-testid='right-arrow'
              icon={ faChevronRight } onClick={this.onClickRight} /> : ''
          }
        </div>
        <Modal showModal= { this.state.showModal }
          key={index}
          comparedProduct={ this.state.comparedProduct }
          currentProduct={ this.props.currentProduct }
          onClickCloseModal={ this.onClickCloseModal } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentProduct: state.currentProduct });

RelatedProducts.propTypes = {
  productId: PropTypes.string,
  currentProduct: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(RelatedProducts);
