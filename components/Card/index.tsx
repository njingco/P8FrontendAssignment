import tw from "tailwind-styled-components";

interface Props{
    total:number
    isLoading:boolean,
}


const Container = tw.div`
    bg-white
    rounded-3xl
    flex
    flex-col
    justify-center
    items-center
    drop-shadow-md
    w-full
    h-72
    md:h-80
    md:max-w-xl
`

const Content = tw.div`
    flex
    flex-col
    justify-center
    items-center
    m-5
`

const Title = tw.div`
    text-subtitle-color
    font-bold
    text-center
`

const Total = tw.div`
    flex
    text-dark-blue
    font-black
    pt-8
`

const Value = tw.div`
    text-total-size
`
const ValueSub = tw.div`
    text-total-sub-size
`

const ApplyToday = tw.button`
    absolute
    bottom-[-25px]
    bg-purple
    rounded-full
    w-46
    p-4
    pl-7
    pr-7
    text-white
    font-medium
`

export default function CardTotal({total, isLoading}:Props){
    const value = total.toFixed(2);
    const number = value.toString().split('.')[0];
    const decimal = value.toString().split('.')[1];

    const TotalView = 
        <Content>
            <Title>Your total monthly payment will be</Title>
            <Total>
                <ValueSub>$</ValueSub>
                <Value>{number}</Value>
                <ValueSub>{decimal}</ValueSub>
            </Total>
            <Title>/month</Title>
        </Content>

   return (
        <Container>
        { isLoading? 
            <Title>Calculating...</Title>
            :
            TotalView
        }
            <ApplyToday onClick={() => {console.log("Apply Today")}}>Apply Today</ApplyToday>           

        </Container>
    )
}