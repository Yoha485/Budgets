import React from 'react';
import { DonutChart } from './donutChart';
import { DataContainer } from './styles';
import { History } from './history';

export const Data = () => {
  return (
    <DataContainer>
      <History />
      <DonutChart />
    </DataContainer>
  );
};
