import React from 'react';

const TextArea = ({ value, maxLength, onChange }) => {
  return(
    <textarea
      value={value} 
      onChange={onChange}
      maxLength={maxLength}
      rows="7"
    />
  );
}

export default TextArea;
