import { Container } from './styles';
import HeaderComponent from '../../components/HeaderComponent';
import ProductsTableComponent from '../../components/HeaderComponent/ProductsTableComponent';

const Home = () => {
  return (
    <Container>
      <HeaderComponent />
      <ProductsTableComponent />
    </Container>
  )
};

export default Home;