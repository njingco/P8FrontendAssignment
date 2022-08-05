import tw from "tailwind-styled-components";
import { Slider as MaterialSlider  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

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
    text-input-title-size
    text-subtitle
    pb-2
`

const ValueContainer = tw.div`
    flex
    text-title
    font-medium
`

const Value = tw.div`
    text-slider-value-size
`
const ValueSub = tw.div`
    text-slider-label-size
`

const useStyles = makeStyles(theme => ({
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    },
    thumb: {
      background: '#2e60ca',

    },
    
  }));
  


export default function Sliders({title, defaultValue, min, max, type, value, onChange}:Props){
    const classes = useStyles();


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
            label:getLabel(min, type)
        },
        {
            value:max,
            label:getLabel(max, type)
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
           
            <MaterialSlider 
                defaultValue={defaultValue} 
                aria-label="Default" 
                step={type=="dollar"?10000:0.5} 
                min={min}
                max={max}
                marks={marks}
                onChange={handleChange}
            />
            
        </>
    )
}