import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ field, onFieldChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="text-input">
      <div>
        <label htmlFor={field.name}>{field.label}</label>
      </div>
      <div>
        <input
          type={field.type}
          value={field.value}
          name={field.name}
          onChange={onFieldChange}
          onFocus={e => setFocused(true)}
          onBlur={e => setFocused(false)}
        />
        {
          focused ? <span>{field.description}</span> : null
        }
      </div>
    </div>
  )
}

TextInput.propTypes = {
  field: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default TextInput;