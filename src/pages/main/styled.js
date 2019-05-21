import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styleConsts from '../../utils/styleConsts';

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 350px;
  margin: 0 auto;
  padding-top: 20px;
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
  width: calc(33% - 16px);
  margin: 0 8px 28px 8px;
  min-height: 180px;
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
  @media(max-width: 850px) {
    width: calc(60% - 16px);
  }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
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
