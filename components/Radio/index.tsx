import { styled } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  options: any[];
  defaultValue: any;
  onChange: Function;
  label?: string;
}

const RadioButton = styled(Radio)({
  color: "#4a3071",
  "&.Mui-checked": {
    color: "#4a3071",
  },
});

export default function RadioButtons({
  options,
  defaultValue,
  onChange,
  label,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <RadioGroup
      aria-labelledby="radio-buttons-group-label"
      defaultValue={defaultValue}
      name="radio-buttons-group"
      onChange={handleChange}
    >
      {options.map((option: number, key: number) => {
        return (
          <FormControlLabel
            label={`${option} ${label ? label : ""}`}
            key={key}
            value={option}
            control={<RadioButton />}
          />
        );
      })}
    </RadioGroup>
  );
}
