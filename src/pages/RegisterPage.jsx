import React, { useState } from 'react';
import { register } from '../redux/auth/thunks';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledLoginWrapper,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginInput,
  StyledLoginBtn,
} from './LoginPage.styled';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;

    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password.length < 7) {
      Notify.failure('Password must be at least 7 characters');
      return;
    }

    if (!name || !email || !password) {
      Notify.failure('Please, fill ampty fields');
      return;
    }

    register({ name, email, password }).then(() => {
      Notify.success('You are successfully registered');

      navigate('/login');
    });

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLoginTitle>CREATE ACCOUNT</StyledLoginTitle>
        <label htmlFor="name"></label>
        <StyledLoginInput
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="email"></label>
        <StyledLoginInput
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="password"></label>
        <StyledLoginInput
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <StyledLoginBtn type="submit">SIGN UP</StyledLoginBtn>
        <p>
          Have already an account? <Link to="/login">Login</Link>
        </p>
      </StyledLoginForm>
    </StyledLoginWrapper>
  );
};

export default RegisterPage;
