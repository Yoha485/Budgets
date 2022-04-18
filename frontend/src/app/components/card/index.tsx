import React from "react";
import { DiagramImg } from "./diagramImg";
import { SpeedometerImg } from "./speedometerImg";
import { CardContainer, CardImg, CardSubtitle, CardText, CardTitle } from "./styles";

interface ICardProps {
  title: string;
  subtitle: string;
  img: "diagram" | "speedometer";
}

export const Card = (props: ICardProps) => {
  return (
    <CardContainer>
      <CardImg>
        {props.img === "diagram" ? <DiagramImg /> : <SpeedometerImg />}
      </CardImg>

      <CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </CardText>
    </CardContainer>
  );
};
