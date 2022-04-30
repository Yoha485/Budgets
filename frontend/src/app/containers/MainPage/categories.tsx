import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PlusButton } from '../../components/plusButton';
import { Category } from './category';
import { CategoriesContainer } from './styles';

export const Categories = () => {
  const [color, setColor] = useState('#000000');
  const categories = useSelector((state: any) => state.categories);

  return (
    <CategoriesContainer>
      {categories.map((category: any) => (
        <Category key={category.id} id={category.id} backgroundColor={category.color} name={category.name} />
      ))}
      <PlusButton
        value={color}
        onChange={(e: any) => {
          setColor(e.target.value);
        }}
      />
    </CategoriesContainer>
  );
};
