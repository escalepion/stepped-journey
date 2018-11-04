import React from 'react';

export const SubmitButton = ({ type, text, active }) => {
  return <button type={type} disabled={!active}>{text}</button>
}
