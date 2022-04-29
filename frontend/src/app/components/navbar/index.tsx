import { useWindowSize } from '@react-hook/window-size';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/user';
import { Button } from '../button';
import { Logo } from '../logo';
import { AuthButtons, LogoContainer, NavbarContainer } from './styles';

export const Navbar = () => {
  const MIN_WIDTH_FOR_LOGIN: number = 600;
  const pathname: string = useLocation().pathname;
  const navigate: NavigateFunction = useNavigate();
  const [width] = useWindowSize();

  const dispatch = useDispatch();

  const userJson = localStorage.getItem('user');
  const [user, setUser] = useState<UserState | null>(userJson !== null ? JSON.parse(userJson) : null);

  useEffect(() => {
    setUser(userJson !== null ? JSON.parse(userJson) : null);
  }, [pathname, userJson])  

  const onLogoutClick = () => {
    dispatch(logout(navigate));
    setUser(null);
  };

  const renderSwitch = (pathname: string) => {
    switch (pathname) {
      case '/':
        return (
          <AuthButtons>
            {width > MIN_WIDTH_FOR_LOGIN && (
              <Button
                onClick={() => {
                  navigate('auth', { state: false });
                }}
                text="Login"
                color="white"
              />
            )}
            <Button
              onClick={() => {
                navigate('auth', { state: true });
              }}
              text="Get Started"
              color="green"
            />
          </AuthButtons>
        );
      case '/auth':
        return <></>;
      case '/main':
        return (
          <AuthButtons>
            {user?.username}
            <Button onClick={() => {onLogoutClick()}} text="Logout" color="green" />
          </AuthButtons>
        );
    }
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      {renderSwitch(pathname)}
    </NavbarContainer>
  );
};
