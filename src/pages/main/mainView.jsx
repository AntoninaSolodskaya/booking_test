import React, { Component } from 'react';
import { Wrapper, Section, CardBlock, Title, Item } from './styled';

class MainView extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <Wrapper>
        <Item>Please click on the room</Item>
        <Section>
          {rooms && rooms.map((room, index) => (
            <CardBlock to={`/calendar/${room._id}`} key={index} room={room}>
              <Title>{room.title}</Title>
              <Title>{room.description}</Title> 
            </CardBlock>
          ))}
        </Section>
      </Wrapper>
    )
  }
}

export default MainView;