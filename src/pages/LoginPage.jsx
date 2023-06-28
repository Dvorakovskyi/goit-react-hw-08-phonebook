import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { loginThunk } from 'redux/auth/thunks';
import { selectProfile } from 'redux/auth/authSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const profile = useSelector(selectProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    profile && navigate('/');
    profile && Notify.success(`Hello, ${profile.name}`);
  }, [navigate, profile]);

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
    <form onSubmit={handleSubmit}>
      {' '}
      LOGIN
      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit">LOGIN</button>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginPage;
