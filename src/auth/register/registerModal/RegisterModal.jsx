import React from 'react';
import RegisterModalView from './RegisterFormView';
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
        isOpen={isOpen} 
        isRegister={isRegister} 
        closeModal={this.closeModal} 
        setRegistered={this.setRegistered} 
      />
    );
  }
}

export default RegisterModal;
