import React from 'react';

function Input({ type, label, errorMessage }) {
  return (
    <React.Fragment>
      <label for={type}>{label}</label>
      <input type={type} id={type} />
      <p>{errorMessage}</p>
    </React.Fragment>
  );
}

export default Input;
