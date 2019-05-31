import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Block, Form, Container, Button, ButtonWrap } from './styled';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../CustomInput';
import { register } from '../../authActions/authActions';

  const actions = {
    register
  };

  const validate = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(values.email)) {
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
  };

 class RegisterForm extends Component {

  render() {
    const { register, pristine, handleSubmit, submitting } = this.props;
    return (
      <Block>
        <Form onSubmit={handleSubmit(register)}>
          <Container>
            <Field
              name="email"
              type="email"
              label="Email:"
              placeholder="Email"
              component={customInput}
            /> 
            <Field
              name="password"
              type="password"
              label="Password:"
              placeholder="Password"
              component={customInput}
            />
            <ButtonWrap>
              <Button type="submit" disabled={pristine || submitting}>Register</Button>
            </ButtonWrap>
          </Container>
        </Form>
      </Block>
    );
  }
};

export default withRouter(connect(null, actions)(reduxForm({ form: 'signUp', validate })(RegisterForm)));
