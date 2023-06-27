import { useEffect, useState } from "react";
import tw from "twin.macro";
import CardTotal from "../Card";
import RadioButtons from "../Radio";
import Sliders from "../Slider";
import content from "../../assets/content_en.json";
import { calculateMortgage } from "../../utils/api";

const Wrapper = tw.div`
    gap-5
    flex
    flex-col
    mt-5
`;

const Container = tw.div`
    w-full
    flex
    justify-center
    flex-col-reverse
    gap-10
    md:flex-row
    md:gap-20
`;

const Content = tw.div`
    w-full
`;

const Input = tw.div`
    w-full
    mt-6
    mb-6
`;

const Title = tw.h1`
    text-title-color
    text-2xl
    font-bold
`;

const SubTitle = tw.h2`
    text-subtitle-color
    text-base
    font-medium
`;

const Header = tw.div`
    w-full
`;

function CreditExperience() {
  const yearsPeriods = [20, 25, 30];
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasePrice, setTotalpurchasePrice] = useState(250000);
  const [interestRate, setInterestRate] = useState(1.5);
  const [period, setPeriod] = useState(yearsPeriods[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    calculateMortgage({
      purchasePrice: purchasePrice,
      period: period,
      interestRate: interestRate,
      setError: setErrorMsg,
      setTotal: setTotalPrice,
    }).then(() => {
      setIsLoading(false);
    });
  }, [purchasePrice, interestRate, period]);

  return (
    <Wrapper>
      <Header>
        <Title>{content.title}</Title>
        <SubTitle>{content.subtitle}</SubTitle>
      </Header>

      <Container>
        <Content>
          <Input>
            <Sliders
              title={content.purchase}
              defaultValue={250000}
              min={50000}
              max={2500000}
              type={"currency"}
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
            <RadioButtons yearsList={yearsPeriods} onChange={setPeriod} />
          </Input>
        </Content>
        <Content>
          <CardTotal
            total={totalPrice}
            isLoading={isLoading}
            errorMsg={errorMsg}
          />
        </Content>
      </Container>
    </Wrapper>
  );
}
export default CreditExperience;
