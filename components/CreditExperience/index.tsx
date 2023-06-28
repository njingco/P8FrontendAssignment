import { useEffect, useState } from "react";
import tw from "twin.macro";
import Card from "../Card";
import content from "../../assets/content_en.json";
import defaults from "./default.json";

import { calculateMortgage } from "../../utils/api";
import { MortgageSlider } from "./MortgageSlider";
import { MortgageRadio } from "./MortgageRadio";

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
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasePrice, setTotalpurchasePrice] = useState(
    defaults.PuchasePrice.defaultValue
  );
  const [interestRate, setInterestRate] = useState(
    defaults.InterestRates.defaultValue
  );
  const [period, setPeriod] = useState(defaults.Period.years[0]);
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
          {/* Purchase Price */}
          <MortgageSlider
            value={purchasePrice}
            defaults={defaults.PuchasePrice}
            onChange={setTotalpurchasePrice}
          />

          {/* Interest Rates */}
          <MortgageSlider
            value={interestRate}
            defaults={defaults.InterestRates}
            type="percent"
            onChange={setInterestRate}
          />

          {/* Period */}
          <MortgageRadio
            yearsList={defaults.Period.years}
            onChange={setPeriod}
          />
        </Content>

        {/* Payment Summary */}
        <Content>
          <Card total={totalPrice} isLoading={isLoading} errorMsg={errorMsg} />
        </Content>
      </Container>
    </Wrapper>
  );
}
export default CreditExperience;
