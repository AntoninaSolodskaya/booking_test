import React, { Component } from 'react';
import { ModalWrap, Modal, Wrap, Button, Title } from './styled';
import LoginForm from '../loginForm/LoginForm';

class LoginModalView extends Component {
  render() {
    const { closeModal, isErr } = this.props;
    return (
      <ModalWrap>
        <Modal>
          <Wrap>
            <Button onClick={closeModal}>X</Button>
          </Wrap>
          <Title>Login</Title>
          <LoginForm isErr={isErr} />
        </Modal>
      </ModalWrap>
    );
  }
};

export default LoginModalView;
