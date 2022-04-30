import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/button';
import { Marginer } from '../../components/marginer';
import { createExpense } from '../../redux/actions/expense';
import { StyledModal, ModalClose, ModalSelectCategory, ModalExpenseName, ModalSubmitContainer, ModalExpenseCost } from './styles';

interface ExpenseModalProps {
  modalIsOpen: boolean;
  closeModal: any;
}

export const ExpenseModal = (props: ExpenseModalProps) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [expenseName, setExpenseName] = useState<string>('');
  const [cost, setCost] = useState<number | null>(null);

  const handleSubmit = () => {
    if(expenseName === null || cost === null || selectedCategory === null) {
      return;
    }

    const body = {
      name: expenseName,
      cost: cost,
      categoryId: selectedCategory
    };
    
    dispatch(createExpense(body));
    props.closeModal();
  };

  return (
    <StyledModal isOpen={props.modalIsOpen} onBackgroundClick={props.closeModal}>
      <ModalClose>
        <AiOutlineClose size={20} onClick={props.closeModal} />
      </ModalClose>
      <Marginer mb={'20px'} />

      <ModalSelectCategory
        onChange={(e) => {
          setSelectedCategory(Number(e.target.value));
        }}>
        <option value="0">Select category:</option>
        {categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </ModalSelectCategory>
      <Marginer mb={'20px'} />

      <ModalExpenseName
        placeholder="Expense name"
        value={expenseName}
        onChange={(e) => {
          setExpenseName(e.target.value);
        }}
      />
      <Marginer mb={'20px'} />

      <ModalExpenseCost
        type="number"
        placeholder="Expense cost"
        min="0"
        onChange={(e) => {
          setCost(Number(e.target.value));
        }}
      />
      <Marginer mb={'20px'} />

      <ModalSubmitContainer>
        <Button text={'Submit'} color={'green'} onClick={handleSubmit} />
      </ModalSubmitContainer>
    </StyledModal>
  );
};
