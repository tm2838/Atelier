import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    };
  }

  // get product id from overview
  componentDidMount() {
    // make api call to related products
    fetch('http://127.0.0.1:3000/relatedProducts') // get request to server route
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({ ...prevState, relatedProducts: data }));
      })
      .catch((err) => {
        throw err;
      });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div>RELATED PRODUCTS</div>
        {this.state.relatedProducts.map((product) => (<ProductCard type={'related'} key={product.id} product={product}/>))};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentProduct: state.currentProduct });

export default connect(mapStateToProps)(RelatedProducts);
