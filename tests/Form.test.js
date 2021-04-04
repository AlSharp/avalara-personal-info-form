import React from 'react';
import Form from '../src/components/Form';

import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { act } from 'react-dom/test-utils';

import { wait } from '../src/utils';

import json from '../mock-data/forms/personalInfo.json';

import { injectValues } from '../src/utils';

const fields = injectValues(json.data.fields);
const formTitle = json.formType;

describe('<Form />', () => {
  let wrapper, field;

  beforeEach(() => {
    field = fields.find(field => field.type === 'text');
    global.fetch = sinon.fake.resolves({json: () => Promise.resolve(json)})
  })

  it('renders', () => {
    wrapper = shallow(<Form path={''} />);
    expect(wrapper).not.toBeNull();
  })

  it('show message before loading form', () => {
    wrapper = mount(<Form path={''} />);
    expect(wrapper.find('.message').first().text()).toContain('Loading form data...');
  })

  it('shows message when unable to load form data', async () => {
    global.fetch = sinon.fake.resolves({json: () => Promise.resolve({error: 'empty json'})})
    await act(async () => {
      wrapper = await mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    })
    expect(wrapper.find('.message').first().text()).toContain('Unabled to load form data');
  })

  it('useEffect hook runs only once', async () => {
    await act(async () => {
      wrapper = mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    });
    expect(global.fetch.callCount).toEqual(1);
  })

  it('renders form after data fetched', async () => {
    await act(async () => {
      wrapper = mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    });
    expect(wrapper.find('form')).toHaveLength(1);
  })

  it('form has correct title', async () => {
    await act(async () => {
      wrapper = mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    });
    expect(wrapper.find('form > h1').first().text()).toContain(formTitle);
  })

  it('form has correct number of fields', async () => {
    await act(async () => {
      wrapper = mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    });
    expect(wrapper.find('.input-field')).toHaveLength(fields.length);
  })

  it('updates input fields', async () => {
    const event = {
      target: { name: field.name, value: 'test' }
    }

    await act(async () => {
      wrapper = mount(<Form path={''} />);
      await wait(1100);
      wrapper.update();
    });

    await act(async () => {
      wrapper.find(`input[name="${field.name}"]`).simulate('change', event);
      await wait(100);
      wrapper.update();
    })

    expect(wrapper.find(`input[name="${field.name}"]`).first().props().value).toContain('test')
  })
})