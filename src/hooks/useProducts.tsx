import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Product } from '../components/ProductCardComponent/productInterface';

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[],
  setStrain: any,
  setStrainType: any,
  setBrand: any
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [strain, setStrain] = useState('');
  const [strainType, setStrainType] = useState('');
  const [brand, setBrand] = useState('');

  useEffect(() => {
    getProducts(strain, strainType, brand)
      .then(response => setProducts(response))
  }, [strain, strainType, brand]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setStrain,
        setStrainType,
        setBrand
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