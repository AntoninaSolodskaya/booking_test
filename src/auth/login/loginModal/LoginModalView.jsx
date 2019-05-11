import React, { Component } from 'react';
import { ModalWrap, Modal, Wrap, Button, Title } from './styled.js';
import LoginForm from '../loginForm/LoginForm';

class LoginModalView extends Component {
  render() {
    const { closeModal, updateUser } = this.props;
    return (
      <ModalWrap>
        <Modal>
          <Wrap>
            <Button onClick={closeModal}>X</Button>
          </Wrap>
          <Title>Login</Title>
          <LoginForm updateUser={updateUser} />
        </Modal>
      </ModalWrap>
    );
  }
};

export default LoginModalView;
