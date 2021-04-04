import React from 'react';
import Form from './components/Form';

export default () => {
  return(
    <div className="App">
      <Form path="./mock-data/forms/personalInfo.json" />
    </div>
  )
}