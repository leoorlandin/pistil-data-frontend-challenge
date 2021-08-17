import { KeyboardEvent, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Container } from './styles';

const HeaderComponent = () => {
  const [filterStrain, setFilterStrain] = useState('');
  const [filterStrainType, setFilterStrainType] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const { setStrain, setStrainType, setBrand } = useProducts();


  const handleFilterButton = () => {
    setStrain(filterStrain)
    setStrainType(filterStrainType)
    setBrand(filterBrand)
  };

  function handleEnterKeyPress(event: KeyboardEvent) {
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

        <input
          type="text"
          placeholder='Filter by brand'
          onChange={(event) => { setFilterBrand(event.target.value) }}
          onKeyPress={handleEnterKeyPress}
        />
        <button onClick={handleFilterButton}>Filter</button>
      </div>
    </Container>
  )
};

export default HeaderComponent