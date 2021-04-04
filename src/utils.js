export const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const injectValues = fields => {
  return fields.map(field => {
    if (field.type === 'text') return {...field, value: ''};
    if (field.type === 'select') return {...field, value: field.options[0]};
    if (field.type === 'radio') return {...field, value: field.options[0]};
    if (field.type === 'checkbox') return {...field, value: false};
    return null;
  })
}