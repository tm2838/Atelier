const postInteractions = (body) => {
  const url = 'http://127.0.0.1:3000/interactions';
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    // .then((res) => res.json())
    .then((data) => {
      console.log(data.status);
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default postInteractions;
