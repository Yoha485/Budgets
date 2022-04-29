import React from 'react';
import { MarginerContainer } from './styles';

interface MarginerProps {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

export const Marginer = (props: MarginerProps) => {
  return <MarginerContainer mt={props.mt} ml={props.ml} mr={props.mr} mb={props.mb} />;
};
