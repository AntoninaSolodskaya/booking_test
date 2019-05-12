import React from 'react';
import RegisterModalView from './RegisterModalView';

class RegisterModal extends React.Component {

  state = {
    isOpen: true,
    isRegister: false
  };

  closeModal = () => {
    this.props.history.goBack()
  };

  setRegistered = () => this.setState({ isRegister: true });

  render() {
    const { isOpen, isRegister } = this.state;
    return (
      <RegisterModalView 
        isRegister={isRegister} 
        closeModal={this.closeModal} 
        setRegistered={this.setRegistered} 
        isOpen={isOpen}
      />
    );
  }
}

export default RegisterModal;
