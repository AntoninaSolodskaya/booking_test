import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  max-width: 400px;
  max-height: 147px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  color: #00CED1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;
