import React, { Component } from 'react';
import { ModalWrap, Modal, Title } from './styled';

class ErrorModal extends Component {

  closeModal = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <ModalWrap onClick={this.closeModal}>
        <Modal>
          <Title>This is not you ordered</Title>
        </Modal>
      </ModalWrap>
    )
  }
}

export default ErrorModal;