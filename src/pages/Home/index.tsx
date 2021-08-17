import { Container } from './styles';
import HeaderComponent from '../../components/HeaderComponent';
import ProductsTableComponent from '../../components/ProductsTableComponent';
import { ProductsProvider } from '../../hooks/useProducts';

const Home = () => {
  return (
    <ProductsProvider>
      <Container>
        <HeaderComponent />
        <ProductsTableComponent />
      </Container>
    </ProductsProvider>
  )
};

export default Home;