import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link, useHistory } from 'react-router-dom';

import API from '../services/api';

function Login() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && password) {
        const login = await API.post('/users/auth', {
          email: email,
          password: password,
        }).then((response) => {
          return response;
        });
        if (login.status === 200) {
          setError(false);
          history.push({
            pathname: 'register-success',
            state: login.data.user,
          });
        }
      }
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };
  useEffect(() => {
    if (error) {
      setErrorMessage('Dados inválidos.');
    } else {
      setErrorMessage(' ');
    }
  }, [error]);

  return (
    <div class="container">
      <h1 class="title-spacing">
        <span>JWT</span> AUTH
      </h1>
      <Input
        type="email"
        label="E-mail"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        label="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <span>{errorMessage}</span>
      <Button label="Login" handleClick={handleSubmit} />
      <p>
        Don't have an account? <Link to="/register">Create Account</Link>.
      </p>
    </div>
  );
}

export default Login;
