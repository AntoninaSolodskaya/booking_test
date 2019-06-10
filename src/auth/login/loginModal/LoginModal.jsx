import React from 'react';
import LoginModalView from './LoginModalView';

class LoginModal extends React.Component {

  closeModal = () => {
    this.props.history.goBack();
  };

  render() {
  
    return (
      <LoginModalView 
        closeModal={this.closeModal} 
      />
    );
  }
}

export default LoginModal;
