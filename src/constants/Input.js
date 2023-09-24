import React from 'react';

import '../styles/form.scss';

const Input = ({ objValue, onChange, index, deleteField }) => {
  const { label, type, value } = objValue;

  return (
    <div className="input-group">
      <div className="input-box">
        <input
          label={label || 'Name'}
          type={type || 'text'}
          id={label}
          value={value || ''}
          onChange={(e) => onChange(e, index)}
        />
        <div className="remove" onClick={(e) => deleteField(e, index)}>
          <button className="remove-btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
