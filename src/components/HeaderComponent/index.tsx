import { Container } from './styles';
import { getProducts } from '../../services/api';

const HeaderComponent = () => {
  return (
    <Container>
      <input type="text" placeholder='Filter by strain' />
      <button>Filter</button>
    </Container>
  )
};

export default HeaderComponent