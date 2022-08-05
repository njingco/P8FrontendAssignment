import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import CardTotal from "../components/Card";
import RadioButtons from "../components/Radio";
import Sliders from "../components/Slider";

const Container = tw.div`
    gap-5
    flex
    flex-col
`

const Content = tw.div`
    w-full
    flex
    justify-center
    gap-10
    flex-col
    
    md:flex-row
`

const Data = tw.div`
    w-full
`

const Title = tw.h1`
    text-title
    font-bold
`

const SubTitle = tw.h2`
    text-subtitle
`

const Header = tw.div`
    w-full
`

const axios = require('axios').default;

export default function CreditExperience(){
    const yearsPeriods = [20, 25, 30];

    const [totalPrice, setTotalPrice] = useState(0);
    const [purchasePrice, setTotalpurchasePrice] = useState(250000);
    const [interestRate, setInterestRate] = useState(1.5);
    const [period, setPeriod] = useState(yearsPeriods[0]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const calculate = async () =>{
            try{
                setIsLoading(true);
                
                const url = `/api/mortgageCalculation?principal=${purchasePrice}&annualInterestRate=${interestRate}&termOfLoan=${period}`;
                await axios.post(url)
                    .then((res:any) => {
                        if (res.status == 200 ){
                            setIsLoading(false)
                            let monthlyPayment = res.data.monthlyPayment
                            setTotalPrice(Number(monthlyPayment))
                        }
                    })

            }catch(err){
                // console.log(err)
            }
        }

        calculate();
    }, [purchasePrice, interestRate, period])

    return(
        <Container>
            <Header>
                <Title>Get started with Digital Credit Experience</Title>
                <SubTitle>Qualify or apply your mortgage in minutes</SubTitle>
            </Header>
           
            <Content>
                <Data>
                    <Sliders 
                        title={"Purchase Price"}
                        defaultValue={250000}
                        min={50000}
                        max={2500000}
                        type={"dollar"}
                        value={purchasePrice}
                        onChange={setTotalpurchasePrice}
                    />

                    <Sliders 
                        title={"Interest Rate"}
                        defaultValue={0}
                        min={0}
                        max={25}
                        type={"percent"}
                        value={interestRate}
                        onChange={setInterestRate}
                    />
                    <RadioButtons yearsList={yearsPeriods} onChange={setPeriod}/>
                </Data>
                <Data>
                    <CardTotal total={totalPrice}/>
                </Data>
            </Content>
        </Container>
    )
}