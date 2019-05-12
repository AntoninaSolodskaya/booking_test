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
    const { updateUser, user } = this.props;
    return (
      <LoginModalView 
        isOpen={isOpen} 
        closeModal={this.closeModal} 
        updateUser={updateUser}
        user={user}
      />
    );
  }
}

export default LoginModal;
