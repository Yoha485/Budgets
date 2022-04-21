import React from 'react';
import { BsCoin } from 'react-icons/bs';
import { LogoContainer, Image, LogoText } from './styles';

export const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <BsCoin size={40} />
      </Image>
      <LogoText>Coin</LogoText>
    </LogoContainer>
  );
};
