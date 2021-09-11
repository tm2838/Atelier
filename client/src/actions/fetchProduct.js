import changeProduct from './productOverview/currentProduct';
import changeStyles from './productOverview/styleList';

let fetchData = () => {

  return (dispatch) => {
    fetch('http://127.0.0.1:3000/products', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(changeProduct(data.product));
      dispatch(changeStyles(data.styles.results));
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default fetchData;