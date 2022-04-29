import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Checkbox } from '../../components/checkbox';
import { Marginer } from '../../components/marginer';
import { signIn, signUp } from '../../redux/actions/user';
import { FormTop } from './formTop';
import { ForgotPassword, Form, FormBottomContainer, FormContainer, Input } from './styles';

const initialFormState: AuthFormData = {
  email: '',
  username: '',
  password: ''
};

export const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState<boolean>(Boolean(location.state) && true);
  const [formData, setFormData] = useState<AuthFormData>(initialFormState);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = () => {
    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  return (
    <FormContainer>
      <FormTop clearForm={clearForm} isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      <Marginer mb="4rem" />

      <Form>
        <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {isSignUp && <Input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />}
        <Input name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </Form>
      <Marginer mb={'1rem'} />

      <Checkbox text={'Remember me'} />
      <Marginer mb={'4rem'} />

      <FormBottomContainer>
        <Button text={isSignUp ? 'Sign up' : 'Sign in'} color="green" rounded auth onClick={handleSubmit} />
        <Marginer mb={'0.5rem'} />

        <ForgotPassword>Forgot password?</ForgotPassword>
      </FormBottomContainer>
    </FormContainer>
  );
};
