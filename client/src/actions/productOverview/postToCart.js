// import resetSelected from './resetSelected';

const postToCart = (sku) => {
  const url = '/cart';
  const body = { sku_id: sku };
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((data) => {
      // dispatch(resetSelected());
      console.log(data.status); //eslint-disable-line
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default postToCart;
