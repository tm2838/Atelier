import changeProduct from './productOverview/currentProduct';
import changeStyles from './productOverview/styleList';
import changeStyle from './productOverview/currentStyle';

const fetchProductAndStyles = (id) => (dispatch) => {
  const url = `http://127.0.0.1:3000/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(changeProduct(data.product));
      dispatch(changeStyles(data.styles.results));
      dispatch(changeStyle(data.styles.results[0]));
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default fetchProductAndStyles;
