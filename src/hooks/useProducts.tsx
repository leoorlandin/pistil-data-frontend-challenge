import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Product } from '../components/ProductCardComponent/productInterface';

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[],
  setStrain: any
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [strain, setStrain] = useState('');

  useEffect(() => {
    getProducts(strain)
      .then(response => setProducts(response))
  }, [strain]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setStrain
      }}
    >
      {children}
    </ProductsContext.Provider>
  )

};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}