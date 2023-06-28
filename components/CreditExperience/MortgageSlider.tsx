import tw from "twin.macro";
import content from "../../assets/content_en.json";
import Sliders from "../Slider";
import { getCurrenyLabel } from "../../utils/numFormatter";
import { InputContainer, InputTitle } from "../../styles/CommonStyles";

const ValueContainer = tw.div`
    flex
    text-title-color
    font-medium
`;

const Value = tw.div`
    text-slider-value-size
`;

const ValueSub = tw.div`
    text-slider-lable-size
`;

interface Props {
  value: number;
  type?: string;
  onChange: Function;
  defaults: {
    defaultValue: number;
    step: number;
    min: number;
    max: number;
  };
}

export const MortgageSlider = ({ value, type, onChange, defaults }: Props) => {
  const currecySign = content.currency.symbol;
  const label = value.toLocaleString("en-US");

  let minLabel: string = "";
  let maxLabel: string = "";
  let display: JSX.Element = <></>;

  switch (type) {
    case "percent":
      minLabel = defaults.min + "%";
      maxLabel = defaults.max + "%";
      display = (
        <ValueContainer>
          <Value>{label}%</Value>
        </ValueContainer>
      );
      break;
    default:
      minLabel = getCurrenyLabel(defaults.min, currecySign);
      maxLabel = getCurrenyLabel(defaults.max, currecySign);
      display = (
        <ValueContainer>
          <ValueSub>{currecySign}</ValueSub>
          <Value>{label}</Value>
        </ValueContainer>
      );
  }

  return (
    <InputContainer>
      <InputTitle>{content.purchase}</InputTitle>
      {display}
      <Sliders
        defaultValue={defaults.defaultValue}
        min={{
          value: defaults.min,
          label: minLabel,
        }}
        max={{
          value: defaults.max,
          label: maxLabel,
        }}
        step={defaults.step}
        onChange={onChange}
      />
    </InputContainer>
  );
};
