import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styleConsts from '../../utils/styleConsts';

export const Wrapper = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardBlock = styled(Link)`
  width: calc(30% - 16px);
  margin: 0 8px 10px 8px;
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  box-shadow: rgba(0,0,0,0.1) 0 0 9px 0.3px;
  border-radius: 5px;
  background: ${styleConsts.bgColor};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  @media(max-width: 850px) {
    width: calc(50% - 16px);
  }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
  }
`;

export const Item = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ADD8E6;
  font-size: 40px;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: #ffffff;
  font-size: 20px;
`;

export const Content = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: #ffffff;
  font-size: 10px;
  line-height: 25px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`;
