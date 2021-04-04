import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';

const fields = {
  text: TextInput,
  radio: RadioInput,
  select: SelectInput
}

const InputField = props => {
  const InputField = fields[props.field.type];
  return (
    <div className="input-field">
      <InputField {...props} />
    </div>
  )
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default InputField;