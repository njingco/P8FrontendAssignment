import tw from "tailwind-styled-components";
import Radio  from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props{
    yearsList:number[],
    onChange:Function
}

const Title = tw`
    font-bold
    text-input-title-size
    text-subtitle
    pb-2
`


export default function RadioButtons({yearsList, onChange}:Props){
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((event.target as HTMLInputElement).value);
    }

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Period</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={yearsList[0]}
                name="radio-buttons-group"
                onChange={handleChange}
            >   
                {yearsList.map((year:number, key:number) => {
                    return <FormControlLabel key={key} value={year} control={<Radio />} label={`${year} Years`} />
                })}
            </RadioGroup>
        </FormControl>
     
    )
}