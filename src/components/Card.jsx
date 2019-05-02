import React, { Component } from 'react'
import styled from 'styled-components';

const CardBlock = styled.div`
  margin: 20px 8px 20px 8px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 9px 0.3px;
  border-radius: 5px;
  background: #FCFCFC;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  @media(max-width: 850px) {
    width: calc(50% - 16px);
    }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
  }
`;

const Image = styled.img`

`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: gray;
`;

const Content = styled.p`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

class Card extends Component {
  render() {
    return (
      <CardBlock>
        <Image></Image>
        <Title>Card Title</Title>
        <Content>Room to five person</Content>
      </CardBlock>
    )
  }
}

export default Card;