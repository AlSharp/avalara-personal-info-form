import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { wait, injectValues } from '../../utils';

import InputField from '../InputField';

const createFieldsState = form => {
  return {
    title: form.formType,
    fields: injectValues(form.data.fields)
  }
}

const FormMessages = {
  LoadingMessage: () => <div className="message">Loading form data...</div>,
  FormLoadingErrorMessage: () => <div className="message">Unabled to load form data</div>
}

const Form = ({ path }) => {
  const [state, setState] = useState({message: 'LoadingMessage', form: null})

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(async json => {
        await wait(1000);
        if (json.error) {
          throw json.error;
        }
        setState(state => ({...state, form: createFieldsState(json)}));
      })
      .catch(error => {
        setState(state => ({...state, message: 'FormLoadingErrorMessage'}));
      })
  }, [])

  const onSubmit = event => {
    event.preventDefault();
    const payload = state.form.fields.reduce((obj, field) => {
      return {...obj, [field.name]: field.value}
    }, {})

    console.log('payload: ', payload);
    console.log('send payload');
  }

  const onFieldChange = field => event => {
    setState(state => ({
      ...state,
      form: {
        ...state.form,
        fields: state.form.fields.map(_field =>
          _field.name === field.name ?
          {
            ..._field,
            value: event.target.value
          } :
          _field
        )
      }
    }));
  }

  if (!state.form) {
    const FormMessage = FormMessages[state.message];
    return <div className="avalara-form"><FormMessage /></div>
  }

  return (
    <div className="avalara-form">
      <form onSubmit={onSubmit}>
        <h1>{state.form.title}</h1>
        {
          state.form.fields
            .sort((a, b) => a - b)
            .map(field => 
              <InputField
                key={field.name}
                field={field}
                onFieldChange={onFieldChange(field)}
              />  
            )
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  path: PropTypes.string.isRequired
}

export default Form;