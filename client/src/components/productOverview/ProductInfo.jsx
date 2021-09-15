/* eslint-disable react/prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React from 'react';
import { connect } from 'react-redux';
import StarRating from '../common/starRating.jsx';
import Style from './Style.jsx';

class ProductInfo extends React.Component {
  render() {
    return (
      (this.props.styles.length === 0)
        ? <div>loading...</div>
        : <div className='product-info'>
          <StarRating /> <a><u>Read all reviews</u></a>
          <p className='product-category'>{this.props.product.category}</p>
          <h1 className='product-name'>{this.props.product.name}</h1>
          <p className='price'>{this.props.product.default_price}</p>
          <figure>
            <p><b>STYLE &gt; </b>   {this.props.styles[0].name}</p>
          </figure>
          <div>
            {
              this.props.styles.map((style) => {
                const photo = style.photos[0].thumbnail_url;
                const index = style.style_id.slice(style.style_id.length);
                return <Style key={style.style_id} photo={photo} index={index}/ >;
              })
            }
          </div>
          <label htmlFor='sizes'></label>
          <select name='sizes' id='sizes'>
            <option value="none" selected disabled hidden>
              SELECT SIZE
            </option>
          </select>
          <label htmlFor='qty'></label>
          <select name='qty' id='qty'>
            <option value="1" selected>
              1
            </option>
          </select>
          <button>ADD TO BAG</button>
        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
  styles: state.styleList,
});

export default connect(mapStateToProps)(ProductInfo);
