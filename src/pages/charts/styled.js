import styled from 'styled-components';
import styleConsts from '../../utils/styleConsts';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width: 450px) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  width: 100%;
    @media(max-width: 850px) {
      max-width: 900px;
      min-width: 380px;
    }
    @media(max-width: 450px) {
      max-width: 380px;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width: 450px) {
    flex-direction: column;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  color: ${styleConsts.bgColor};
  border-radius: 5px;
  border: 1px solid ${styleConsts.bgColor};
  padding: 10px 10px;
  outline: none;
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    background: ${styleConsts.bgColor};
    color: #ffffff;
  }
`;