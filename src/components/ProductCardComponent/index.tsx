import { memo } from "react";
import { Container } from "./styles";

const ProductCard = () => {
  return (
    <Container>
      <div>
        <img src="https://source.unsplash.com/random/800x600" alt="Product photo" />
      </div>
      <h2>products strain</h2>
      <h3>strain type</h3>
      <h3>brand</h3>
      <h3>category</h3>
      <h3>weight grams</h3>
    </Container>
  )
};

export default memo(ProductCard);