import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ field, onFieldChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="radio-input">
      <div>
        <label htmlFor={field.name}>{field.label}</label>
      </div>
      <div>
        {
          field.options.map((option, index) => {
            return (
              <label key={index}>
                <input
                  type={field.type}
                  name={`${field.name}-${option}`}
                  value={option}
                  checked={field.value === option}
                  onChange={onFieldChange}
                  onFocus={e => setFocused(true)}
                  onBlur={e => setFocused(false)}
                />
                <span>{option}</span>
              </label>
            )
          })
        }
        {
          focused ? <span>{field.description}</span> : null
        }
      </div>
    </div>
  )
}

RadioInput.propTypes = {
  field: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default RadioInput;