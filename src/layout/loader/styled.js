import styled from 'styled-components';

export const Wrapper = styled.div`
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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify: content: center;
  align-items: center;
`;

export const Span = styled.span`
  color: #ffffff;
  padding-top: 20px;
`;