import React from 'react'
import { CategoryContainer } from './styles'

interface CategoryProps {
  backgroundColor: string;
  name: string;
}

export const Category = (props: CategoryProps) => {
  return (
    <CategoryContainer backgroundColor={props.backgroundColor}>{props.name}</CategoryContainer>
  )
}
