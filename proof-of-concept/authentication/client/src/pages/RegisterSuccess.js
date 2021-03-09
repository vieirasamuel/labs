import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

function RegisterSuccess() {
  const history = useHistory();

  const handleRedirect = () => {
    history.replace('/');
  };
  return (
    <div class="container success">
      <img class="success-icon" src="/icons/success.svg" alt="Success Icon" />
      <h1>Success</h1>
      <div class="user-info">
        <p>
          Name: <br />
          <span>Samuel Santos Vieira</span>
        </p>
        <p>
          E-mail: <br />
          <span>samuelsantos1996@hotmail.com</span>
        </p>
        <p>
          UUID: <br />
          <span>153aedb0-9208-4bb5-ba88-e67a14b70663</span>
        </p>
      </div>
      <Button label="Sign In" handleClick={handleRedirect} />
    </div>
  );
}

export default RegisterSuccess;
