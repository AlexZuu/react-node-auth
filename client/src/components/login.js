import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import * as constants from '../constants'

const {
  LOGIN_URL,
  REGISTRATION_URL,
  REGISTRATION_COMPLETED,
  ERROR_LOGIN,
  ERROR_SERVER,
} = constants

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, { login, password })
      setAuth(response.data.login)
      navigate('/page')
    } catch (e) {
      if (e.response?.status === 400) {
        setError(ERROR_LOGIN);
      } else {
        setError(ERROR_SERVER);
      }
    }
  }

  const submitRegistration = async (e) => {
    e.preventDefault();
    if (login && password) {
      try {
        await axios.post(REGISTRATION_URL, { login, password })
        setError('')
        setMessage(REGISTRATION_COMPLETED)
      } catch (e) {
        setError(ERROR_SERVER);
      }
    }
  }

  return (
    <div>
      <h1>Вход / Регистрация</h1>
      <form>
        <label htmlFor="login">Логин: </label>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <br/><br/>
        <label htmlFor="passowrd">Пароль: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        /><br/><br/>
        <button onClick={submitLogin}>Войти</button>
        <button onClick={submitRegistration}>Регистрация</button>
      </form>
      <p>{message}</p>
      <p>{error}</p>
    </div>
  );
};

export default Login;
