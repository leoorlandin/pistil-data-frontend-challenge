import { InputFilter } from './styles';

interface InputComponentProps {
  setFilterValue: any
  handleEnterKeyPress: any,
  placeHolder: string
}

const InputComponent = ({
  setFilterValue,
  handleEnterKeyPress,
  placeHolder
}: InputComponentProps) => {
  return (
    <InputFilter
      type="text"
      placeholder={placeHolder}
      onChange={(event) => { setFilterValue(event.target.value) }}
      onKeyPress={handleEnterKeyPress}
    />
  )
};

export default InputComponent;