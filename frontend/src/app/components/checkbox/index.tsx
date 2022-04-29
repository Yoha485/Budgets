import React, { useState } from 'react';
import { CheckboxContainer, CheckboxText, SvgContainer } from './styles';

interface CheckboxProps {
  text: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const [selected, setSelected] = useState(false);
  

  return (
    <CheckboxContainer>
      <SvgContainer>
        <svg
          onClick={() => {setSelected((prevState) => !prevState)}}
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 3">
            <rect id="Rectangle 1" width="16" height="16" rx="3" fill="#27BF75" />
            <g id="Vector">
              <path d="M5 7.77778L7 9.55555L10.3333 6" fill="#27BF75" />
              {selected && (<path
                d="M5 7.77778L7 9.55555L10.3333 6"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />)}
            </g>
          </g>
        </svg>
      </SvgContainer>

      <CheckboxText>{props.text}</CheckboxText>
    </CheckboxContainer>
  );
};
