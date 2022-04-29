import React, { useState } from 'react';
import { PlusButton } from '../../components/plusButton';
import { Category } from './category';
import { CategoriesContainer } from './styles';

export const Categories = () => {
  const [color, setColor] = useState('#000000');

  return (
    <CategoriesContainer>
      <Category backgroundColor={'blue'} name={'Food'} />
      <Category backgroundColor={'orange'} name={'Home'} />
      <PlusButton value={color} onChange={(e: any) => {setColor(e.target.value)}} />
    </CategoriesContainer>
  );
};
