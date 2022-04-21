import React from 'react';
import { Button } from '../button';
import { Logo } from '../logo';
import { AuthButtons, LogoContainer, NavbarContainer } from './styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <AuthButtons>
        <Button text="Login" color="white" />
        <Button text="Get Started" color="green" />
      </AuthButtons>
    </NavbarContainer>
  );
};
