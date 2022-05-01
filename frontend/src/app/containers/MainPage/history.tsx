import React from 'react';
import { useSelector } from 'react-redux';
import { Cost, HistoryContainer, HistoryTitle, HistoryToken } from './styles';

export const History = () => {
  const categories = useSelector((state: any) => state.categories);
  const expenses: any = [];
  categories.forEach((category: any) => {
    category.expenses.forEach((expense: any) => expenses.push({ ...expense, color: category.color, categoryName: category.name }));
  });
  const sortedExpenses = expenses.slice().sort((a: any, b: any) => new Date(b.created).getTime() - new Date(a.created).getTime());

  console.log(expenses);

  return (
    <HistoryContainer>
      <HistoryTitle>History transactions</HistoryTitle>
      {sortedExpenses.map((expense: any) => (
        <HistoryToken>
          ({<p>{expense.categoryName}</p>}) {expense.name} <Cost>{`-${expense.cost}$`}</Cost>
        </HistoryToken>
      ))}
    </HistoryContainer>
  );
};
