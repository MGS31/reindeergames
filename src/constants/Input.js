import React from 'react';

const Input = ({ objValue, onChange, index, deleteField }) => {
  const { label, type, value } = objValue;

  return (
    <div className="input-group">
      <div className="input">
        <input
          label={label || 'Name'}
          type={type || 'text'}
          id={label}
          value={value || ''}
          onChange={(e) => onChange(e, index)}
        />
        <div onClick={(e) => deleteField(e, index)}>X</div>
      </div>
    </div>
  );
};

export default Input;
