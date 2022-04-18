import React from "react";
import { Button } from "../../components/button";
import { Br, HeadingContainer, MainTitle, Subtitle } from "./styles";

export const Heading = () => {
  return (
    <HeadingContainer>
      <MainTitle>
        Quickly Grow Your <Br /> Money with Coin
      </MainTitle>
      <Subtitle>
        The only app that gets your money <Br /> into shape
      </Subtitle>
      <Button text="Get Your Account Now" color='green' rounded arrow />
    </HeadingContainer>
  );
};
