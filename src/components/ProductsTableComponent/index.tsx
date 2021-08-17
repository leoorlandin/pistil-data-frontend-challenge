import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCardComponent";
import { Container } from "./styles";

const ProductsTableComponent = () => {
  const { products } = useProducts();

  return (
    <Container>

      {products?.map(product => (
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