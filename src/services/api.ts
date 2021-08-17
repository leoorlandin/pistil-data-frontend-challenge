import axios from 'axios';
import { Product } from '../components/ProductCardComponent/productInterface';

export const api = axios.create({
  baseURL: 'http://localhost:1922/',
});



export const getProducts = async (
  strain: string,
  strainType: string,
  brand: string
): Promise<Product[]> => {
  let url = `products?_page=0&_limit=12`

  if (strain) {
    url += `&strain=${strain}`
  } if (strainType) {
    url += `&strain_type=${strainType}`
  } if (brand) {
    url += `&brand=${brand}`
  }

  const products = api.get(
    url
  )
    .then(response => {
      return response.data
    })

  return products
};
