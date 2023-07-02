import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { loginThunk } from 'redux/auth/thunks';
import {
  selectIsLoading,
  selectProfile,
  selectToken,
} from 'redux/auth/authSlice';
import { StyledLoaderWrapper } from 'components/Loader/Loader.styled';
import {
  StyledLoginWrapper,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginInput,
  StyledLoginBtn,
} from './LoginPage.styled';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const profile = useSelector(selectProfile);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token && navigate('/');
    profile && Notify.success(`Hello, ${profile.name}`);
  }, [navigate, profile, token]);

  const handleChange = event => {
    const { name, value } = event.target;

    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email || !password) {
      Notify.failure('Please, fill ampty fields');
      return;
    }

    dispatch(loginThunk({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {!isLoading ? (
        <StyledLoginWrapper>
          <StyledLoginForm onSubmit={handleSubmit}>
            <StyledLoginTitle>Login</StyledLoginTitle>
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
            <StyledLoginBtn type="submit">LOGIN</StyledLoginBtn>
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
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

export default LoginPage;
