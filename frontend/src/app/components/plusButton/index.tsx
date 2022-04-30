import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../redux/actions/category';
import { Plus, PlusButtonContainer } from './styles';

interface PlusButtonProps {
  value: string;
  onChange: any;
}

export const PlusButton = (props: PlusButtonProps) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    const body = {
      name: '',
      color: props.value
    };
    dispatch(createCategory(body));
  };

  return (
    <PlusButtonContainer>
      <Plus>
        <AiOutlinePlus onClick={onClickPlus} size={23} />
      </Plus>

      <input type="color" {...props} />
    </PlusButtonContainer>
  );
};
