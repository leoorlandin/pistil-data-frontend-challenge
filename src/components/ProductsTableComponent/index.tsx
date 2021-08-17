import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../ProductCardComponent";
import { Product } from "../ProductCardComponent/productInterface";
import { Container } from "./styles";

const ProductsTableComponent = () => {
  const [productsList, setProductsList] = useState<Product[]>();
  const [strainFilter, setStrainFilter] = useState<string>('');

  const handleGetProducts = async (): Promise<Product[]> => {
    const productsList = await getProducts(strainFilter);

    return productsList
  };

  useEffect(() => {
    handleGetProducts()
      .then(response => {
        setProductsList(response)
      })
  }, []);

  return (
    <Container>

      {productsList?.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          brand={product.brand}
          category={product.category}
          placeholder_img={product.placeholder_img}
          strain={product.strain}
          strain_type={product.strain_type}
          weight_grams={product.weight_grams}
        />
      ))}

    </Container>
  )
};

export default ProductsTableComponent;