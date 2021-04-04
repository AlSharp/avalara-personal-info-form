import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ field, onFieldChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="select-input">
      <div>
        <label htmlFor={field.name}>{field.label}</label>
      </div>
      <div>
        <select
          name={field.name}
          value={field.value}
          onChange={onFieldChange}
          onFocus={e => setFocused(true)}
          onBlur={e => setFocused(false)}
        >
          {
            field.options.map((option, index) =>
              <option key={index} value={option}>{option}</option>
            )
          }
        </select>
        {
          focused ? <span>{field.description}</span> : null
        }
      </div>
    </div>
  )
}

SelectInput.propTypes = {
  field: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default SelectInput;