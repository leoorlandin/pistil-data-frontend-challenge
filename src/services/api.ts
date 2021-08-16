import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:1922/',
});

export const getProducts = () => {
  api.get('products').then(response => {
    return response.data
  })
};
