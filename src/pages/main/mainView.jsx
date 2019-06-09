import React, { Component } from 'react';
import { Wrapper, Section, CardBlock, Content, Title, Img, ImgWrap } from './styled';

class MainView extends Component {
  render() {
    const { selectedOption } = this.props;
    return (
      <Wrapper>
        <Section>
          {selectedOption && selectedOption.map((room, index) => (
            <CardBlock 
            
              to={`/booking_test/calendar/${room.value}`} 
              key={index} 
              room={room}
            >
              <ImgWrap>
                <Img style={{ background: `url(${room.imageUrl})no-repeat center/cover` }} />
              </ImgWrap> 
              <Title>{room.label}</Title>
              <Content>{room.description}</Content>
            </CardBlock>
          ))} 
        </Section>
      </Wrapper>
    );
  }
};


export default MainView;