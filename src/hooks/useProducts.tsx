import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Product } from '../components/ProductCardComponent/productInterface';

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[],
  setStrain: any,
  setStrainType: any
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [strain, setStrain] = useState('');
  const [strainType, setStrainType] = useState('');

  useEffect(() => {
    getProducts(strain, strainType)
      .then(response => setProducts(response))
  }, [strain, strainType]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setStrain,
        setStrainType
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