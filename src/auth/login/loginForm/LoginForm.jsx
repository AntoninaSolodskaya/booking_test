import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Block, Container, Button, ButtonWrap, Form, Text } from './styled';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../../register/CustomInput';
import { login } from '../../authActions/authActions';

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


// import React from 'react';
// import { connect } from 'react-redux';
// import { withFormik, Form, Field } from 'formik';
//  const mapState = (state) => ({
//    auth: state.auth
//  })
//   const App = ({
//     values,
//     handleSubmit
//   }) => (
    
//     <Form>
//       <Field type="email" name="email" placeholder="Email"/>
//       <Field type="password" name="password" placeholder="Password"/>
//       <button>Submit</button>
//     </Form>
//     )
//   const LoginForm = withFormik({
    
//     mapPropsToValues({ email, password, currentUser, auth}) {
//       const userEmail = auth.currentUser.email;
//       const userPassword = auth.currentUser.password;
//       console.log(userEmail)
//       return {
//         email: userEmail || '',
//         password: userPassword || '',
//       }
//   },
//     handleSubmit(values){
//     console.log(values)
   
//     }
//   })(App)
  
// export default connect(mapState)(LoginForm);