import tw from "tailwind-styled-components";
import { Slider } from '@material-ui/core';
import { styled } from "@mui/system";
import { createTheme , MuiThemeProvider } from "@material-ui/core/styles";


type numberType = "dollar" | "percent";

interface Props {
    title:string,
    defaultValue:number,
    min:number,
    max:number,
    type:numberType,
    value:number,
    onChange:Function
}

const Title = tw.div`
    font-bold
    text-lg
    text-title-color
    pb-2
`

const ValueContainer = tw.div`
    flex
    text-title-color
    font-medium
`

const Value = tw.div`
    text-slider-value-size
`
const ValueSub = tw.div`
    text-slider-label-size
`

const theme = createTheme ({
    overrides: {
      MuiSlider: {
        root:{
            color: "#2e60ca",
            
        },
        thumb:{
            color: "white",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "#2e60ca",
        },
        rail:{
            color:"#a1adb8",
        },
        mark:{
            color:"#a1adb8",
        },
        markLabel:{
            color:'#3b4f5b',
            weight:'bold',
            marginTop:6,
            transform:'translateX(-100%)',
            '&[data-index="0"]' : {
              transform:'none'
            },
        },
        markLabelActive:{
            color:"#3b4f5b",
            weight:'bold',
        },
      }
    }
  });

export default function Sliders({title, defaultValue, min, max, type, value, onChange}:Props){
    const handleChange = (event:any, newValue:any) => {
        onChange(newValue);
    }
    
    const getLabel = (number:number, type:string) => {
        if (type == "dollar"){
            if (number < 1000)
                return (`$${number}`)
            
            else if (number >= 1000 && number < 1000000)
                return (`$${number/1000}K`)
        
            else if (number > 1000000)
                return (`$${number/1000000}M`)
        }else {
            if (number == 0)
                return (`${number}`)
        
            else if (number > 0)
                return (`${number}%`)
        }
    }

    const marks=[
        {
            value:min,
            label:getLabel(min, type),
        },
        {
            value:max,
            label:getLabel(max, type),

        }
    ]


    return (
        <>
            <Title>{title}</Title>
            <ValueContainer>
                { type=="dollar" ? 
                    <>
                        <ValueSub>$</ValueSub>
                        <Value>{value.toLocaleString('en-US')}</Value>
                    </>
                    :
                        <Value>{value.toLocaleString('en-US')}%</Value>
          
                }
               
            </ValueContainer>
           
            <MuiThemeProvider theme={theme}>
                <Slider 
                    defaultValue={defaultValue} 
                    step={type=="dollar"?10000:0.5} 
                    min={min}
                    max={max}
                    marks={marks}
                    onChange={handleChange}
                />
            </MuiThemeProvider>
            
            
        </>
    )
}