import React from 'react';

<<<<<<< HEAD
function Input({ type, label, errorMessage }) {
  return (
    <React.Fragment>
      <label for={type}>{label}</label>
      <input type={type} id={type} />
=======
function Input({ type, label, errorMessage, onChange }) {
  return (
    <React.Fragment>
      <label for={type}>{label}</label>
      <input type={type} id={type} onChange={onChange} />
>>>>>>> poc/auth
      <p>{errorMessage}</p>
    </React.Fragment>
  );
}

export default Input;
