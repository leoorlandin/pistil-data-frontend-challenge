import ProductCard from "../ProductCardComponent";
import { Container } from "./styles";

const ProductsTableComponent = () => {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  )
};

export default ProductsTableComponent;