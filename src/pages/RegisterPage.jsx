import React, { useState } from 'react';
import { register } from '../redux/auth/thunks';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    <form onSubmit={handleSubmit}>
      {' '}
      CREATE ACCOUNT
      <label htmlFor="name"></label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={name}
      />
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
      <button type="submit">SIGN UP</button>
      <p>
        Have already an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterPage;
