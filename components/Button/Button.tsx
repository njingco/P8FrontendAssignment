import tw from "twin.macro";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonStyle = tw`
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
    focus:shadow-lg 
    focus:gap-2
    focus:w-52
`;

const ArrowHidden = tw`
    transition-all
    duration-300
    invisible
    w-0
`;

const ArrowVisible = tw`
    transition-all
    duration-300
    w-6
    visible
    flex
    items-end
`;

const ButtonText = tw.div``;

const ApplyButton = styled.button`
  ${ButtonStyle}

  .Arrow {
    ${ArrowHidden}
  }

  &:hover,
  :focus {
    .Arrow {
      ${ArrowVisible}
    }
  }
`;

export default function Button({ label }: { label: string }) {
  return (
    <ApplyButton
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={() => {
        console.log(label);
      }}
    >
      <ButtonText>{label}</ButtonText>
      <div className={"Arrow"}>
        <HiArrowNarrowRight size="1.5rem" color="white" />
      </div>
    </ApplyButton>
  );
}
