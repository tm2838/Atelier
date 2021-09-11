import axios from 'axios';

export const fetchReviews = () => {
  return axios.get('/reviews');
}

export const postReview = () => {
  return axios.post('/reviews', {});
}

export const putReview = () => {
  return axios.put('/reviews', {});
}