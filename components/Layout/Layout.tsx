import React from "react";
import tw from "twin.macro";
import Navbar from "../Navbar";

const Wrapper = tw.div`
    w-full
    flex-col
    justify-center
    flex
    items-center
`;

const Container = tw.div`
  w-full
  max-w-6xl
  p-5
  pb-16
`;

function Layout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <Wrapper>
      <Navbar />
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Layout;
