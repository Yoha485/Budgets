import React, { useState } from 'react';
import { Categories } from './categories';
import {
  AddContainer,
  AddExpense,
  MainTopContainer,
} from './styles';
import { ExpenseModal } from './expenseModal';

export const MainTop = () => {
  const [addExpenseButtonText, setAddExpenseButtonText] = useState('+');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <MainTopContainer>
      <AddContainer>
        <AddExpense
          onMouseOver={() => {
            setAddExpenseButtonText('Expense');
          }}
          onMouseLeave={() => {
            setAddExpenseButtonText('+');
          }}
          onClick={openModal}>
          {addExpenseButtonText}
        </AddExpense>
      </AddContainer>
      <ExpenseModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Categories />
    </MainTopContainer>
  );
};
