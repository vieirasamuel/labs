import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useHistory } from 'react-router-dom';

import API from '../services/api';

function Register() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (name && email && password) {
        const login = await API.post('/users/register', {
          name: name,
          email: email,
          password: password,
        }).then((response) => {
          return response;
        });
        console.log(login);
        if (login.status === 201) {
          setError(false);
          history.push('register-success');
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
      <h1>Create Account</h1>
      <p class="title-spacing">
        Already have an account? <Link to="/">Sign In</Link>.
      </p>
      <Input
        type="name"
        label="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
      <Button label="Sign Up" handleClick={handleSubmit} />
    </div>
  );
}

export default Register;
