import React, { Component } from 'react';
import { Wrapper, Section, CardBlock, Title, Item, Content, Img } from './styled';

class MainView extends Component {
  render() {
    const { rooms } = this.props;
    
    return (
      <Wrapper>
        <Item>Please click on the room</Item>
        <Section>
          {rooms && rooms.map((room, index) => (
            <CardBlock 
              to={`/calendar/${room._id}`} 
              key={index} 
              room={room}
            >
              <Title>{room.title}</Title>
              <Content>{room.description}</Content> 
            </CardBlock>
          ))}
        </Section>
      </Wrapper>
    )
  }
}

export default MainView;