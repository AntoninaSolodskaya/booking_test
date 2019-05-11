import React from 'react';
import LoginModalView from './LoginModalView';

class LoginModal extends React.Component {

  state = {
    isOpen: true
  };

  closeModal = () => {
    this.props.history.goBack()
  };

  render() {
    const { isOpen } = this.state;
    const { updateUser } = this.props;
    return (
      <LoginModalView isOpen={isOpen} closeModal={this.closeModal} updateUser={updateUser} />
    );
  }
}

export default LoginModal;
