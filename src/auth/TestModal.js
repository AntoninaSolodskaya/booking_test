import React from 'react';
import {connect } from 'react-redux';
import RegisterModal from '../auth/register/registerModal/RegisterModal';
import { closeModal } from './modalActions';

const actions = {
  closeModal
}

const TestModal =({closeModal}) => {
  return <RegisterModal onClick={closeModal}/> 
}
export default connect(null, actions)(TestModal);