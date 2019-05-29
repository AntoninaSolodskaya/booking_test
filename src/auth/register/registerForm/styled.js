import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const Label = styled.label`
  color: #311e1e;
  font-size: 16px;
  padding-bottom: 6px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  margin: auto;
`;

export const Button = styled.button`
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 125px;
  font-size: 20px;
`;
export const Input = styled.input``;

export const ErrorMessage = styled.span`
  color: red;
  marginTop: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;