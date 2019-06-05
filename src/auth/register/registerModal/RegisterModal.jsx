import React from 'react';
import RegisterModalView from './RegisterModalView';

class RegisterModal extends React.Component {

  closeModal = () => {
    this.props.history.push("/")
  };

  render() {
   
    return (
      <RegisterModalView 
        closeModal={this.closeModal} 
      />
    );
  }
}

export default RegisterModal;
