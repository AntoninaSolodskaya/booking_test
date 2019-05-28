import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styleConsts from '../../utils/styleConsts';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

export const CardBlock = styled(Link)`
  width: 60%;
  margin: 0 8px 28px 8px;
  min-height: 280px;
  max-height: 500px
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  box-shadow: rgba(0,0,0,0.2) 0 0 9px 4px;
  border-radius: 5px;
  background: ${styleConsts.bgColor};
  overflow: hidden;
  transition: all 0.7s ease-in-out;
  text-decoration: none;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 20px;
`;

export const Content = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: #ffffff;
  font-size: 10px;
  line-height: 20px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-height: 175px;
  min-height: 175px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  position: relative;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  min-width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
