import React from 'react';
import { ButtonContainer } from './styles';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ButtonProps {
  text: string;
  color: 'white' | 'green';
  rounded?: boolean;
  arrow?: boolean;
  auth?: boolean;
  onClick?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer onClick={props.onClick} background={props.color} rounded={props.rounded} auth={props.auth}>
      {props.text}
      {props.arrow && <MdOutlineKeyboardArrowRight size={35} />}
    </ButtonContainer>
  );
};
