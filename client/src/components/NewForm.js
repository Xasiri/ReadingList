import React from 'react';
import { Button, Checkbox, Form, Select } from 'semantic-ui-react';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
];
const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Form.Field>
      <Select placeholder="Select your country" options={countryOptions} />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default FormExampleForm;
