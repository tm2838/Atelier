const postToCart = (sku) => {
  const url = 'http://127.0.0.1:3000/cart';
  const body = { sku_id: sku };
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((data) => {
      console.log(data.status); //eslint-disable-line
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default postToCart;
