import React, { Component } from 'react';
import { Wrapper, Section, CardBlock, Title } from './styled';

class MainView extends Component {
  render() {
    const { rooms } = this.props;
    return (
      <Wrapper>
        <Title style={{color: "lightblue", fontSize: "40px"}}>Please click on the room</Title>
        <Section>
          {rooms && rooms.map((room, index) => (
            <CardBlock to={`/calendar/${room._id}`} key={index} room={room} style={{background: "lightblue"}}>
              <Title style={{fontSize: "18px"}}>{room.title}</Title>
              <Title>{room.description}</Title> 
            </CardBlock>
          ))}
        </Section>
      </Wrapper>
    )
  }
}

export default MainView;