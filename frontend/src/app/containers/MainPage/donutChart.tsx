import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { DonutChartContainer } from './styles';

export const DonutChart = () => {
  const categories = useSelector((state: any) => state.categories);

  const data = {
    labels: categories.map((c: any) => c.name),
    datasets: [
      {
        data: categories.map((c: any) => c.overallCost),
        backgroundColor: categories.map((c: any) => c.color),
      }
    ]
  };

  return (
    <DonutChartContainer>
      <Doughnut data={data} redraw={true} />
    </DonutChartContainer>
  );
};
