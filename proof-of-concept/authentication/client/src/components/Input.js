import React from 'react';

function Input({ type, label, errorMessage, onChange }) {
  return (
    <React.Fragment>
      <label for={type}>{label}</label>
      <input type={type} id={type} onChange={onChange} />
      <p>{errorMessage}</p>
    </React.Fragment>
  );
}

export default Input;
