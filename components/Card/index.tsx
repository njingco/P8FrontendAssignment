import tw from "twin.macro";
import styled from "styled-components";
import { HiArrowNarrowRight } from 'react-icons/hi'

interface Props{
    total:number
    isLoading:boolean,
    errorMsg:string
}


const Wrapper = tw.div`
    relative
    bg-white
    rounded-3xl
    flex
    flex-col
    justify-center
    items-center
    drop-shadow-md
    w-full
    h-72
    p-5
    md:h-80
    md:max-w-xl
`

const Content = tw.div`
    flex
    flex-col
    justify-center
    items-center
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
    text-total-size-mb
    md:text-total-size
`
const ValueSub = tw.div`
    text-total-sub-size
`

const Loading = tw`
    text-2xl
`

const ErrorMessage = tw`
    text-error-color
    text-lg
`

const Button = tw`
    transition-all
    duration-300
    absolute
    bottom-[-25px]
    bg-purple
    rounded-full
    p-5
    pl-7
    pr-7
    text-white
    font-medium
    flex
    items-center
    justify-center
    w-44
    hover:shadow-lg 
    hover:gap-2
    hover:w-52
`

const ArrowHidden = tw`
    transition-all
    duration-300
    invisible
    w-0
`
const ArrowVisible = tw`
    transition-all
    duration-300
    w-6
    visible
    flex
    items-end
`
const ButtonText = tw.div``

const ApplyButton = styled.button`
    ${Button}

    .Arrow {
        ${ArrowHidden}
    }

    &:hover{
        .Arrow {
            ${ArrowVisible}
        }
    }
`

export default function CardTotal({total, isLoading, errorMsg}:Props){
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
        <Wrapper>            
            {errorMsg.length > 0 ? 
                <Title style={ErrorMessage}>{errorMsg}</Title> :
                (
                    isLoading? 
                    <Title style={Loading}>Calculating...</Title>
                    :
                    <>
                    {TotalView}
                    <ApplyButton 
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={() => {console.log("Apply Today")}}>
                            <ButtonText>Apply Today</ButtonText>
                            <div className={"Arrow"}><HiArrowNarrowRight  size="1.5rem" color="white"/></div>
                    </ApplyButton>           
                    </>
                )
            }
        </Wrapper>
    )
}