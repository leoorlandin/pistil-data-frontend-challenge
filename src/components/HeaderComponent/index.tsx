import { KeyboardEvent, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import InputComponent from '../InputComponent';
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
        <InputComponent
          placeHolder='Filter by strain'
          setFilterValue={setFilterStrain}
          handleEnterKeyPress={handleEnterKeyPress}
        />

        <InputComponent
          placeHolder='Filter by strain type'
          setFilterValue={setFilterStrainType}
          handleEnterKeyPress={handleEnterKeyPress}
        />

        <InputComponent
          placeHolder='Filter by brand'
          setFilterValue={setFilterBrand}
          handleEnterKeyPress={handleEnterKeyPress}
        />
        <button onClick={handleFilterButton}>Filter</button>
      </div>
    </Container>
  )
};

export default HeaderComponent