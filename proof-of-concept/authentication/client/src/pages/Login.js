import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="container">
      <h1 class="title-spacing">
        <span>JWT</span> AUTH
      </h1>
      <Input type="email" label="E-mail" />
      <Input type="password" label="Password" />
      <Button text="Login" />
      <p>
        Don't have an account? <Link to="/register">Create Account</Link>.
      </p>
    </div>
  );
}

export default Login;
