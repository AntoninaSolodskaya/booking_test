import React, { Component } from 'react';
import { ModalWrap, Modal, Wrap, Button, Title } from './styled';
import RegisterForm from '../registerForm/RegisterForm';

class RegisterFormView extends Component {
  render() {
    const { closeModal } = this.props;
    return (
      <ModalWrap>
        <Modal>
          <Wrap>
            <Button onClick={closeModal}>X</Button>
          </Wrap>
          <Title>Register</Title>
            <RegisterForm />
        </Modal>
      </ModalWrap>
    );
  }
};

export default RegisterFormView;