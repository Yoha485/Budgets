import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthForm } from './authForm'
import { PageContainer } from './styles'

export const AuthPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : null;
    if(user) {
      navigate('/main')
    }
  }, [navigate]);

  return (
    <PageContainer>
      <AuthForm />
    </PageContainer>
  )
}
