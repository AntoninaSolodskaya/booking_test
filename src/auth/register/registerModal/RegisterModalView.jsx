import React, { Component } from 'react';
import { ModalWrap, Modal, Wrap, Button, Title, Text } from './styled';
import RegisterForm from '../registerForm/RegisterForm';

class RegisterFormView extends Component {
  render() {
    const { closeModal, isRegister, setRegistered } = this.props;
    return (
      <ModalWrap>
        <Modal>
          <Wrap>
            <Button onClick={closeModal}>X</Button>
          </Wrap>
          <Title>Register</Title>
          {isRegister ? (
            <Text>you are registered! Please Log in.</Text>
          ) : (
            <RegisterForm 
              setRegistered={setRegistered} 
              isRegister={isRegister} 
            />
          )}
        </Modal>
      </ModalWrap>
    )
  }
}

export default RegisterFormView;