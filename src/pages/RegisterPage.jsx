import React, { useState } from 'react';
import { registerThunk } from '../redux/auth/thunks';
import { selectIsLoading } from 'redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledLoginWrapper,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginInput,
  StyledLoginBtn,
} from './LoginPage.styled';
import Loader from 'components/Loader/Loader';
import { StyledLoaderWrapper } from 'components/Loader/Loader.styled';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

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

    dispatch(registerThunk({ name, email, password }));

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      {!isLoading ? (
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
      ) : (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      )}
    </>
  );
};

export default RegisterPage;
