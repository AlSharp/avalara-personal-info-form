import React from 'react';
import TextInput from '../src/components/InputField/TextInput';

import { mount } from 'enzyme';
import sinon from 'sinon';

import { data } from '../mock-data/forms/personalInfo.json';

import { injectValues } from '../src/utils';

const fields = injectValues(data.fields);

describe('<TextInput />', () => {

  let wrapper, field, onFieldChange;

  beforeAll(() => {
    field = fields.find(field => field.type === 'text');
    onFieldChange = sinon.stub();
    wrapper = mount(<TextInput field={field} onFieldChange={onFieldChange} />);
  })

  it('renders an `.text-input`', () => {
    expect(wrapper).not.toBeNull();
  })

  it('renders an `.text-input`', () => {
    expect(wrapper.find('.text-input')).toHaveLength(1);
  })

  it('renders label with correct name', () => {
    const elements = wrapper.find('label');
    expect(elements).toHaveLength(1);
    expect(elements.first().text()).toContain(field.label);
  })

  it('renders input with correct initial value', () => {
    const elements = wrapper.find('input');
    expect(elements).toHaveLength(1);
    expect(elements.first().props().value).toContain(field.value);
  })

  it('onChange event fires', () => {
    const event = {
      target: { name: field.name, value: 'test' }
    }
    wrapper.find('input').simulate('change', event);
    expect(onFieldChange.calledOnce).toBe(true);
  })

  it('show input description only on focus', () => {
    expect(wrapper.find('span')).toHaveLength(0);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('span')).toHaveLength(1);
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('span')).toHaveLength(0);
  })
})