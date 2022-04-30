import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { MainPageContainer } from './styles';
import { DonutChart } from './donutChart';
import { MainTop } from './mainTop';
import { Marginer } from '../../components/marginer';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/actions/category';

ChartJS.register(ArcElement, Tooltip, Legend);

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : null;
    if (!user) {
      navigate('/main');
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <MainPageContainer>
      <MainTop />

      <Marginer mb='30px' />

      <DonutChart />
    </MainPageContainer>
  );
};
