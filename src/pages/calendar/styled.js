import styled from 'styled-components';

export const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: #00CED1;
  font-size: 30px;
`;

export const Container = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  @media(max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
  @media(max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Button = styled.button`
  justify-content: center;
  display: flex
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 100px;
  max-height: 35px;
  font-size: 20px;
  outline: none;
`;

export const Icon = styled.button`
  justify-content: center;
  display: flex
  background-color: initial;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  max-width: 100px;
  max-height: 35px;
  font-size: 20px;
  outline: none;
  @media(max-width: 850px) {
    margin-bottom: 15px;
  }
  @media(max-width: 450px) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  color: #000000;
  font-size: 15px;
  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Time = styled.p`
  font-size: 16px;
  padding: 10px 20px;
  color: #00CED1;
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center; 
  padding: 10px 20px;
  @media(max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
  @media(max-width: 450px) {
    justify-content: center;
    align-items: center;
  }
`;
