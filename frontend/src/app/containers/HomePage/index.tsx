import React from "react";
import { BackgroundCircles } from "../../components/backgroundCircles";
import { Navbar } from "../../components/navbar";
import { Heading } from "./heading";
import { HomeCards } from "./homeCards";
import { PageContainer } from "./styles";

export const HomePage = () => {
  return (
    <PageContainer>
      <BackgroundCircles />
      <Navbar />
      <Heading />
      <HomeCards />
    </PageContainer>
  );
};
