import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, children, value, type = "text", onChange }) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        id={id}
        value={value}
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default InputWithLabel;