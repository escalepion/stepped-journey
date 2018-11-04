import React from 'react';

const Input = ({ name, type, value, onChange, onKeyPress, maxLength, rounded }) => {
  return (
    <input 
      className={rounded ? 'border-rounded' : ''}
      name={name} 
      type={type} 
      value={value} 
      onChange={onChange}
      onKeyPress={onKeyPress}
      autoComplete="off"
      maxLength={maxLength}
    />
  );
}

export default Input;
