import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Container } from './styles';

const HeaderComponent = () => {
  const [filterStrain, setFilterStrain] = useState('');
  const [filterStrainType, setFilterStrainType] = useState('');
  const { setStrain, setStrainType } = useProducts();


  const handleFilterButton = () => {
    setStrain(filterStrain)
    setStrainType(filterStrainType)
  };

  function handleEnterKeyPress(event: any) {
    if (event.key === 'Enter') {
      handleFilterButton();
    }
  };

  return (
    <Container>
      <h1>Pistil Data</h1>
      <div>
        <input
          type="text"
          placeholder='Filter by strain'
          onChange={(event) => { setFilterStrain(event.target.value) }}
          onKeyPress={handleEnterKeyPress}
        />
        <input
          type="text"
          placeholder='Filter by strain type'
          onChange={(event) => { setFilterStrainType(event.target.value) }}
          onKeyPress={handleEnterKeyPress}
        />
        <button onClick={handleFilterButton}>Filter</button>
      </div>
    </Container>
  )
};

export default HeaderComponent