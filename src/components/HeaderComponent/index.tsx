import { useState } from 'react';
import { Container } from './styles';

const HeaderComponent = () => {
  const [filterStrain, setFilterStrain] = useState('');

  return (
    <Container>
      <h1>Pistil Data</h1>
      <div>
        <input
          type="text"
          placeholder='Filter by strain'
          onChange={(event) => { setFilterStrain(event.target.value) }}
        />
        <button>Filter</button>
      </div>
    </Container>
  )
};

export default HeaderComponent