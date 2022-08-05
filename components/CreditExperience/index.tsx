import { useEffect, useState } from "react";
import tw from "twin.macro";
import CardTotal from "../Card";
import RadioButtons from "../Radio";
import Sliders from "../Slider";

const Wrapper = tw.div`
    gap-5
    flex
    flex-col
    mt-5
`

const Container = tw.div`
    w-full
    flex
    justify-center
    flex-col
    gap-5
    md:flex-row
    md:gap-20
`

const Content = tw.div`
    w-full
`
const Input = tw.div`
    w-full
    mt-6
    mb-6
`

const Title = tw.h1`
    text-title-color
    text-2xl
    font-bold
`

const SubTitle = tw.h2`
    text-subtitle-color
    text-base
    font-medium
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
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(()=>{
        const calculateMortgage = async () =>{
            try{
                setIsLoading(true);
                setErrorMsg("");
                const url = `/api/mortgageCalculation?principal=${purchasePrice}&termOfLoan=${period}&annualInterestRate=${interestRate}`;

                await axios.post(url)
                    .then((res:any) => {
                        if (res.status === 200){
                            // Request Success
                            let {monthlyPayment} = res.data ; 
                            setTotalPrice(Number(monthlyPayment))
                            setIsLoading(false)
                        }
                    })

            } catch(err:any){
                const status = err.response.status;
                const {error} = err.response.data;
                
                if (status === 404){
                    // Server not found
                    setErrorMsg("Server Down")
                } else if (status === 400){
                    // Failed Param failed conditions (Interest Rates < 1)
                    setErrorMsg(error + ". Interest Rates must be greater or equal to 1.")
                }else{
                    setErrorMsg("Internal Server Error");
                }
            }
        }

        calculateMortgage();
    }, [purchasePrice, interestRate, period])

    return(
        <Wrapper>
            <Header>
                <Title>Get started with Digital Credit Experience</Title>
                <SubTitle>Qualify or apply your mortgage in minutes</SubTitle>
            </Header>
            
            <Container>
                <Content>
                    <Input>
                        <Sliders 
                            title={"Purchase Price"}
                            defaultValue={250000}
                            min={50000}
                            max={2500000}
                            type={"dollar"}
                            value={purchasePrice}
                            onChange={setTotalpurchasePrice}
                        />
                    </Input>
                        
                    <Input>
                        <Sliders 
                            title={"Interest Rate"}
                            defaultValue={1.5}
                            min={1}
                            max={25}
                            type={"percent"}
                            value={interestRate}
                            onChange={setInterestRate}
                        />
                    </Input>

                    <Input>
                        <RadioButtons yearsList={yearsPeriods} onChange={setPeriod}/>
                    </Input>
                </Content>
                <Content>
                    <CardTotal total={totalPrice} isLoading={isLoading} errorMsg={errorMsg}/>
                </Content>
            </Container>
        </Wrapper>
    )
}