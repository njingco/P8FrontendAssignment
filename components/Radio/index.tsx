import tw from "tailwind-styled-components";
import { styled } from "@mui/system";
import Radio  from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme , MuiThemeProvider } from "@material-ui/core/styles";

interface Props{
    yearsList:number[],
    onChange:Function
}

const Container = tw.div`
`

const Title = tw.div`
    font-bold
    text-lg    
    text-title-color
    pb-2
`

const RadioButton = styled(Radio)({
    color:"#4a3071",
    "&.Mui-checked":{
        color:"#4a3071"
    },
})

const theme = createTheme({
    overrides: {
      MuiRadio: {
        root: {
          color: '#4a3071',
        },
        checked:{
            color: '#4a3071',
        }
      },
    },
  });


export default function RadioButtons({yearsList, onChange}:Props){
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <Container>
            <Title>Period</Title>
            {/* <MuiThemeProvider theme={theme}> */}
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue={yearsList[0]}
                    name="radio-buttons-group"
                    onChange={handleChange}
                >   
                    {yearsList.map((year:number, key:number) => {
                        return <FormControlLabel
                        key={key} 
                        value={year}
                        control={<RadioButton  />} 
                        label={`${year} Years`} />
                    })}
                </RadioGroup>
            {/* </MuiThemeProvider> */}
            
            
        </Container>
     
    )
}