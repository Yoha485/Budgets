import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundCircles } from '../../components/backgroundCircles';
import { Heading } from './heading';
import { HomeCards } from './homeCards';
import { PageContainer } from './styles';

export const HomePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : null;
    if(user) {
      navigate('/main')
    }
  }, [navigate]);

  return (
    <PageContainer>
      <BackgroundCircles />
      <Heading />
      <HomeCards />
    </PageContainer>
  );
};
