import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import StarRating from '../common/starRating.jsx';
import './styles.css';
import noImageFound from '../../../../assets/noImageFound.png';

const ProductCard = (props) => {
  const relatedProduct = props.product.product;
  const { name } = relatedProduct;
  const category = relatedProduct.category.toUpperCase();
  let defaultStyle = false;
  let photo = '';
  let price = '';
  if (props.type === 'related') {
    const styles = props.product.styles.results;
    for (let i = 0; i < styles.length; i += 1) {
      if (styles[i]['default?'] === true) {
        defaultStyle = true;
        if (styles[i]?.photos[0]?.thumbnail_url) {
          photo = <div className='image' style={{ backgroundImage: `url(${styles[i].photos[0].thumbnail_url})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
        } else {
          photo = <div className='image' style={{ backgroundImage: `url(${noImageFound})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
        }
        if (styles[i].sale_price !== null && styles[i].sale_price !== 'null') {
          price = (
            <p className='cardInfo'>
              <span style={{ color: 'red' }}>${styles[i].sale_price}</span>
              <span style={{ textDecorationLine: 'line-through' }}>${relatedProduct.default_price}</span>
            </p>
          );
        } else {
          price = <p className='cardInfo'><span>${relatedProduct.default_price}</span></p>;
        }
      }
    }
    if (defaultStyle === false) {
      if (styles[0]?.photos[0]?.thumbnail_url) {
        photo = <div className='image' style={{ backgroundImage: `url(${styles[0].photos[0].thumbnail_url})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
      } else {
        photo = <div className='image' style={{ backgroundImage: `url(${noImageFound})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
      }
      if (styles[0].sale_price !== null && styles[0].sale_price !== 'null') {
        price = (
          <p className='cardInfo'>
            <span style={{ color: 'red' }}>${styles[0].sale_price}</span>
            <span style={{ textDecoration: 'strikethrough' }}>${relatedProduct.default_price}</span>
          </p>);
      } else {
        price = <p className='cardInfo'><span>${relatedProduct.default_price}</span></p>;
      }
    }
  } else { // if props.type = 'outfit
    // photo
    const { styles } = props.product;
    if (styles?.photos[0]?.thumbnail_url) {
      photo = <div className='image' style={{ backgroundImage: `url(${styles.photos[0].thumbnail_url})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
    } else {
      photo = <div className='image' style={{ backgroundImage: `url(${noImageFound})`, backgroundSize: 'cover', repeat: 'no-repeat' }}></div>;
    }
    // price
    if (styles.sale_price !== null && styles.sale_price !== 'null') {
      price = (
        <p className='cardInfo'>
          <span style={{ color: 'red' }}>${styles.sale_price}</span>
          <span style={{ textDecorationLine: 'line-through' }}>${relatedProduct.default_price}</span>
        </p>
      );
    } else {
      price = <p className='cardInfo'><span>${relatedProduct.default_price}</span></p>;
    }
  }
  return (
    <div>
      <div className='icon'>
        { props.type === 'related' ? <Button type={ props.type }
          product={ props.product }
          onClickStar={ props.onClickStar }
          /> : <Button type={ props.type }
          product={ props.product }
          onClickCircleX={ props.onClickCircleX }
          />
        }
      </div>
      <div className='card' onClick={() => props.onClickCard(relatedProduct.id)}>
        { photo }
        <p className='cardInfo'>{ category }</p>
        <p className='cardInfo'><b>{ name }</b></p>
          { price }
          <StarRating rating={relatedProduct.ratingScore} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
  category: PropTypes.string,
  default_price: PropTypes.number,
  type: PropTypes.string,
  showModal: PropTypes.bool,
  onClickCard: PropTypes.func,
  onClickStar: PropTypes.func,
  onClickCloseModal: PropTypes.func,
  onClickCircleX: PropTypes.func,
};

export default ProductCard;
