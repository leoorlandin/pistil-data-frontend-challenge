import axios from 'axios';
import { Product } from '../components/ProductCardComponent/productInterface';

export const api = axios.create({
  baseURL: 'http://localhost:1922/',
});

export const getProducts = async (): Promise<Product[]> => {
  const products = api.get('products?_page=0&_limit=12').then(response => {
    return response.data
  })

  return products
};
