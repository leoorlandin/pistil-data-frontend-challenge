import { Container } from './styles';

const HeaderComponent = () => {
  return (
    <Container>
      <input type="text" placeholder='Filter by strain' />
      <button>Filter</button>
    </Container>
  )
};

export default HeaderComponent