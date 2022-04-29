import React from 'react'
import { Categories } from './categories'
import { DateContainer, MainTopContainer } from './styles'

export const MainTop = () => {
  

  return (
    <MainTopContainer>
      {/* <DateContainer>Today</DateContainer> */}
      <Categories />
    </MainTopContainer>
  )
}
