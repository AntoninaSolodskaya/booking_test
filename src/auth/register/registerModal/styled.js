import styled from 'styled-components';

export const ModalWrap = styled.div`
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

export const Modal = styled.div`
  max-width: 430px;
  max-height: 425px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 6px 15px;
`;

export const Button = styled.button`
  padding: 7px 10px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 33px;
  color: #00CED1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  color: #00CED1;
`;
