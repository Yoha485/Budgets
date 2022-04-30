import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../redux/actions/category';
import { CategoryContainer, CategoryName } from './styles';

interface CategoryProps {
  id: number;
  backgroundColor: string;
  name: string;
}

export const Category = (props: CategoryProps) => {
  const [name, setName] = useState(props.name);
  const dispatch = useDispatch();

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const body = {
      name: e.target.value
    };
    dispatch(updateCategory(body, props.id));
  };

  return (
    <CategoryContainer backgroundColor={props.backgroundColor}>
      <CategoryName placeholder="New Category" value={name} onChange={onChangeCategory} />
    </CategoryContainer>
  );
};
