import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Block, Container, Button, ButtonWrap, Form, Text } from './styled';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../../register/CustomInput';
import { login } from '../../register/registerForm/authActions';
import { SubmissionError } from 'redux-form'

  const actions = {
    login
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

  class LoginForm extends Component {

    // submit = (values) => {
    //   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    //   return sleep(1000) 
    //     .then(() => {
    //       if (!(values.email)) {
    //         throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })
    //       } else if (values.password !== password) {
    //         throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
    //       } else {
    //         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //       }
    //     })
    // }
   
    render() {
      const { login, pristine, handleSubmit, submitting, isErr } = this.props;
      return (
        <Block>
          <Form onSubmit={handleSubmit(login)}>
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
              {isErr &&
                <Text>Wrong password or email</Text>
              }  
              <ButtonWrap>
                <Button type="submit" disabled={pristine || submitting}>
                  Submit
                </Button>
              </ButtonWrap>
            </Container> 
          </Form>
        </Block>
      );
    }
  };

export default withRouter(connect(null, actions)(reduxForm({ form: 'signIn', validate })(LoginForm)));
