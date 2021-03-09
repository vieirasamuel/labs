import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div class="container">
      <h1>Create Account</h1>
      <p class="title-spacing">
        Already have an account? <Link to="/">Sign In</Link>.
      </p>
      <Input type="name" label="Name" />
      <Input type="email" label="E-mail" />
      <Input type="password" label="Password" />
      <Button text="Sign Up" />
    </div>
  );
}

export default Register;
