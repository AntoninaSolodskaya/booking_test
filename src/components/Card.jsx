import React, { Component } from 'react'
import styled from 'styled-components';

const CardBlock = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  max-width: 500px;
  max-height: 150px;
  border: 1px solid gray;
  background-color: innitial;
  margin: 20px 20px;
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
        <Content>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Content>
      </CardBlock>
    )
  }
}

export default Card;