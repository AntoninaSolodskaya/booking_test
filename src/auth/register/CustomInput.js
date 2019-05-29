import React, { Fragment } from 'react';
import { Section, Label, Input, ErrorMessage } from '../register/registerForm/styled';

export const customInput = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <Fragment>
    <Section>
      <Label>{label}</Label>
      <Input {...input} placeholder={placeholder} type={type} />
    </Section>  
    {touched && error && <ErrorMessage>{error}</ErrorMessage>}
  </Fragment>
);
