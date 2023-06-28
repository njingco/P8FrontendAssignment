import { Slider } from "@material-ui/core";
import { createTheme, MuiThemeProvider, Theme } from "@material-ui/core/styles";

const sliderTheme: Theme = createTheme({
  overrides: {
    MuiSlider: {
      root: {
        color: "#40a2e4",
      },
      thumb: {
        color: "white",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#40a2e4",
      },
      rail: {
        color: "#a1adb8",
      },
      mark: {
        color: "#a1adb8",
      },
      markLabel: {
        color: "#3b4f5b",
        weight: "bold",
        marginTop: 6,
        transform: "translateX(-100%)",
        '&[data-index="0"]': {
          transform: "none",
        },
      },
      markLabelActive: {
        color: "#3b4f5b",
        weight: "bold",
      },
    },
  },
});

interface Props {
  defaultValue: number;
  min: { value: number; label: string };
  max: { value: number; label: string };
  step: number;
  onChange: Function;
}

export default function Sliders({
  defaultValue,
  min,
  max,
  step,
  onChange,
}: Props) {
  // On Slider Change
  const handleChange = (event: any, newValue: any) => {
    onChange(newValue);
  };

  return (
    <MuiThemeProvider theme={sliderTheme}>
      <Slider
        defaultValue={defaultValue}
        step={step}
        min={min.value}
        max={max.value}
        marks={[min, max]}
        onChangeCommitted={handleChange}
      />
    </MuiThemeProvider>
  );
}
