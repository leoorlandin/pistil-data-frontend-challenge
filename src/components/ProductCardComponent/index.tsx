import { memo } from "react";
import { Product } from "./productInterface";

import { Container } from "./styles";

const ProductCard = ({
  id,
  brand,
  category,
  placeholder_img,
  strain,
  strain_type,
  weight_grams
}: Product) => {
  return (
    <Container>
      <div>
        <img src={placeholder_img} alt="Product photo" />
      </div>
      <div>
        <h2>{strain}</h2>
        <h3>Type: {strain_type}</h3>
        <h3>Brand: {brand}</h3>
        <h3>Category: {category}</h3>
        <h3>Weight: {weight_grams} grams</h3>
      </div>
    </Container>
  )
};

export default memo(ProductCard);