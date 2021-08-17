import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Product } from '../components/ProductCardComponent/productInterface';

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[],
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts('Slur')
      .then(response => setProducts(response))
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products }}
    >
      {children}
    </ProductsContext.Provider>
  )

};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}