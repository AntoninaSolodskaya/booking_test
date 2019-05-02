import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  max-width: 430px;
  max-height: 430px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 6px 15px;
`;

const Button = styled.button`
  padding: 7px 10px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 33px;
  color: #00CED1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


class LoginModal extends React.Component {

  state = {
    isOpen: true
  };

  closeModal = () => {
    this.props.history.goBack()
  };

  render() {
    return (
      <ModalWrap>
        <Modal>
          <Wrap>
            <Button onClick={this.closeModal}>X</Button>
          </Wrap>
          <Title style={{ margin: "0" }}>Login</Title>
          <LoginForm />
        </Modal>
      </ModalWrap>
    );
  }
}

export default LoginModal;