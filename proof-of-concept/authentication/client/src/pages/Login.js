import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  return (
    <div class="container">
      <h1>
        JWT <span>AUTH</span>
      </h1>
      <Input type="email" label="E-mail" />
      <Input type="password" label="Password" />
      <Button text="Login" />
      <p>
        Don't have an account? <a href="#">Create Account</a>.
      </p>
    </div>
  );
}

export default Login;
