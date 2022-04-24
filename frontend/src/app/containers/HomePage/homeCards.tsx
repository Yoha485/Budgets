import React from 'react';
import { Card } from '../../components/card';
import { HomeCardsContainer } from './styles';

export const HomeCards = () => {
  return (
    <HomeCardsContainer>
      <Card
        title="Have perfect control"
        subtitle="over all your cash expenses, bank accounts, E-Wallets and crypto wallets."
        icon="diagram"
      />
      <Card
        title="Get a quick overview"
        subtitle="about your total incomes and expenses at a glance and in one place."
        icon="speedometer"
      />
    </HomeCardsContainer>
  );
};
