import React from 'react';
import { withRouter } from 'react-router-dom';
import { Block, Container, Section, Label, Button, ButtonWrap } from './styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import api from '../../../utils/api';

  const RegisterForm = () => (
    <Block>
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (
              values.password.length < 6 
            ) {
              errors.password = "Password should be at least 6 characters long";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              localStorage.setItem('user', JSON.stringify(values));
              api.signUp(values)
              setSubmitting(false);
            }, 400);
          }}
        >
        {({ isSubmitting }) => (
          <Form style={{ width: '100%',display: 'flex',flexDirection: 'column'}}>
            <Container>
              <Section>
                <Label>Email:</Label>
                <Field type="email" name="email" />
                <ErrorMessage style={{ color: 'red', marginTop: '5px' }} name="email" component="div" />
              </Section>
              <Section>
                <Label>Password:</Label>
                <Field type="password" name="password" />
                <ErrorMessage style={{ color: 'red', marginTop: '5px' }} name="password" component="div" />
              </Section>
              <ButtonWrap>
                 <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </ButtonWrap>
            </Container> 
          </Form>
        )}
      </Formik>
    </Block>
  );

 export default withRouter(RegisterForm);

