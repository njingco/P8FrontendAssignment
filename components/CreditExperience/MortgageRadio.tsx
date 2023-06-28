import { InputContainer, InputTitle } from "../../styles/CommonStyles";
import RadioButtons from "../Radio";

interface Props {
  yearsList: number[];
  onChange: Function;
}

export const MortgageRadio = ({ yearsList, onChange }: Props) => {
  return (
    <InputContainer>
      <InputTitle>Period</InputTitle>
      <RadioButtons
        options={yearsList}
        defaultValue={yearsList[0]}
        onChange={onChange}
        label={"Years"}
      />
    </InputContainer>
  );
};
