import resetSelected from './productOverview/resetSelected';

const postInteractions = (body) => (dispatch) => {
  const url = 'http://127.0.0.1:3000/interactions';
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((data) => {
      dispatch(resetSelected());
      console.log(data.status); //eslint-disable-line
    })
    .catch((err) => {
      console.log(err); //eslint-disable-line
    });
};

export default postInteractions;
