import React, { useState } from 'react';
import { login } from 'Api/api';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    login({ email, password });

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
