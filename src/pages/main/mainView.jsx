import React, { Component } from 'react';
import { Wrapper, Section, CardBlock, Content, Title, Img, ImgWrap } from './styled';

class MainView extends Component {
  render() {
    const { rooms } = this.props;
    
    return (
      <Wrapper>
        <Section>
          {rooms && rooms.map((room, index) => (
            <CardBlock 
              to={`/calendar/${room._id}`} 
              key={index} 
              room={room}
            >
              <ImgWrap>
                <Img src={room.imageURL} />
              </ImgWrap> 
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