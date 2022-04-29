import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { AiOutlinePlus } from 'react-icons/ai';
import { Plus, PlusButtonContainer } from './styles';

interface PlusButtonProps {
  value: string;
  onChange: any;
}

export const PlusButton = (props: PlusButtonProps) => {
  return (
    <PlusButtonContainer>
      <Plus>
        <AiOutlinePlus
          onClick={() => {
            console.log(props.value);
          }}
          size={23}
        />
      </Plus>

      <input type="color" {...props} />
    </PlusButtonContainer>
  );
};
