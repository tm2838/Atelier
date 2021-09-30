const postInteractions = (body) => {
  const url = '/interactions';
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

export default postInteractions;
