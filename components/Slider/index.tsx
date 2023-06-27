import tw from "twin.macro";
import { Slider } from "@material-ui/core";
import { createTheme, MuiThemeProvider, Theme } from "@material-ui/core/styles";
import content from "../../assets/content_en.json";

interface Props {
  title: string;
  defaultValue: number;
  min: number;
  max: number;
  type: string;
  value: number;
  onChange: Function;
}

const Title = tw.div`
    font-bold
    text-lg
    text-title-color
    pb-2
`;

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

export default function Sliders({
  title,
  defaultValue,
  min,
  max,
  type,
  value,
  onChange,
}: Props) {
  const handleChange = (event: any, newValue: any) => {
    onChange(newValue);
  };
  const currecySign = content.currency.symbol;

  const getLabel = (number: number, type: string) => {
    if (type === "percent") {
      if (number == 0) return `${number}`;
      else if (number > 0) return `${number}%`;
    } else {
      if (number < 1000) return `${currecySign}${number}`;
      else if (number >= 1000 && number < 1000000) return `$${number / 1000}K`;
      else if (number > 1000000) return `${currecySign}${number / 1000000}M`;
    }
  };

  const marks = [
    {
      value: min,
      label: getLabel(min, type),
    },
    {
      value: max,
      label: getLabel(max, type),
    },
  ];

  return (
    <>
      <Title>{title}</Title>
      <ValueContainer>
        {type === "percent" ? (
          <Value>{value.toLocaleString("en-US")}%</Value>
        ) : (
          <>
            <ValueSub>{currecySign}</ValueSub>
            <Value>{value.toLocaleString("en-US")}</Value>
          </>
        )}
      </ValueContainer>

      <MuiThemeProvider theme={sliderTheme}>
        <Slider
          defaultValue={defaultValue}
          step={type === "percent" ? 0.5 : 500}
          min={min}
          max={max}
          marks={marks}
          onChangeCommitted={handleChange}
        />
      </MuiThemeProvider>
    </>
  );
}
