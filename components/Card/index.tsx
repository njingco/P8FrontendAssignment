import tw from "twin.macro";
import content from "../../assets/content_en.json";
import Button from "../Button/Button";

interface Props {
  total: number;
  isLoading: boolean;
  errorMsg: string;
}

const Wrapper = tw.div`
    relative
    bg-white
    rounded-3xl
    flex
    flex-col
    justify-center
    items-center
    shadow-lg
    w-full
    h-72
    p-5
    md:h-80
    md:max-w-xl
`;

const Content = tw.div`
    flex
    flex-col
    justify-center
    items-center
`;

const Title = tw.div`
    text-subtitle-color
    font-bold
    text-center
`;

const Total = tw.div`
    flex
    text-dark-blue
    font-black
    pt-8
`;

const Value = tw.div`
    text-total-size-mb
    md:text-total-size
`;

const ValueSub = tw.div`
    text-total-sub-size
`;

const Loading = tw`
    text-2xl
`;

const ErrorMessage = tw`
    text-error-color
    text-lg
`;

export default function CardTotal({ total, isLoading, errorMsg }: Props) {
  const value = total.toFixed(2);
  const number = value.toString().split(".")[0];
  const decimal = value.toString().split(".")[1];

  const TotalView = (
    <Content>
      <Title>{content.totalPayment} </Title>
      <Total>
        <ValueSub>{content.currency.symbol}</ValueSub>
        <Value>{parseInt(number).toLocaleString("en-US")}</Value>
        <ValueSub>{decimal}</ValueSub>
      </Total>
      <Title>/{content.date.month.toLocaleLowerCase()}</Title>
    </Content>
  );

  return (
    <Wrapper>
      {errorMsg.length > 0 ? (
        <Title style={ErrorMessage}>{errorMsg}</Title>
      ) : isLoading ? (
        <Title style={Loading}>{content.calculating}</Title>
      ) : (
        <>
          {TotalView}
          <Button label={content.apply} />
        </>
      )}
    </Wrapper>
  );
}
