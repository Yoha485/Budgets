import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { MainPageContainer } from './styles';
import { Categories } from './categories';
import { DonutChart } from './donutChart';
import { MainTop } from './mainTop';

ChartJS.register(ArcElement, Tooltip, Legend);

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : null;
    if (!user) {
      navigate('/main');
    }
  }, [navigate]);

  return (
    <MainPageContainer>
      <MainTop />
      <DonutChart />
    </MainPageContainer>
  );
};
