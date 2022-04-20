import React from "react";
import { DiagramIcon } from "./diagramIcon";
import { SpeedometerIcon } from "./speedometerIcon";
import { CardContainer, CardImg, CardSubtitle, CardText, CardTitle } from "./styles";

interface CardProps {
  title: string;
  subtitle: string;
  icon: "diagram" | "speedometer";
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <CardImg>
        {props.icon === "diagram" ? <DiagramIcon /> : <SpeedometerIcon />}
      </CardImg>

      <CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </CardText>
    </CardContainer>
  );
};
