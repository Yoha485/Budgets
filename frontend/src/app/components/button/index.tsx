import React from "react";
import { ButtonContainer } from "./styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ButtonProps {
  text: string;
  color: "white" | "green";
  rounded?: boolean;
  arrow?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer background={props.color} rounded={props.rounded}>
      {props.text}
      {props.arrow && <MdOutlineKeyboardArrowRight size={35} />}
    </ButtonContainer>
  );
};
