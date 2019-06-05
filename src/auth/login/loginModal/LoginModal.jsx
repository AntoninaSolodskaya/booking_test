import React from 'react';
import LoginModalView from './LoginModalView';

class LoginModal extends React.Component {

  state = {
    isOpen: true
  };

  closeModal = () => {
    this.props.history.goBack();
    this.setState({ isOpen: false })
  };

  render() {
    const { isOpen } = this.state;
    
    return (
      <LoginModalView 
        isOpen={isOpen} 
        closeModal={this.closeModal} 
      />
    );
  }
}

export default LoginModal;
