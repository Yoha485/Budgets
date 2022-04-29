import React from 'react';
import { FormTopContainer, TopSwitch } from './styles';

interface FormProps {
  isSignUp: boolean;
  setIsSignUp: Function;
  clearForm: Function;
}

export const FormTop = (props: FormProps) => {
  const onClickSignUp = () => {
    if (props.isSignUp) {
      return;
    }

    props.clearForm()
    props.setIsSignUp((prevState: any) => !prevState);
  };

  const onClickSignIn = () => {
    if (!props.isSignUp) {
      return;
    }

    props.clearForm()
    props.setIsSignUp((prevState: any) => !prevState);
  };

  return (
    <FormTopContainer>
      <TopSwitch activated={!props.isSignUp} onClick={onClickSignIn}>
        Sign in
      </TopSwitch>
      <TopSwitch activated={props.isSignUp} onClick={onClickSignUp}>
        Sign up
      </TopSwitch>
    </FormTopContainer>
  );
};
