import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from './Calendar';

const Wrapper = styled.div`
  max-width: 950px;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardBlock = styled(Link)`
  width: calc(30% - 16px);
  margin: 0 8px 10px 8px;
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: rgba(0,0,0,0.1) 0 0 9px 0.3px;
  border-radius: 5px;
  background: #FCFCFC;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  @media(max-width: 850px) {
    width: calc(50% - 16px);
    }
  @media(max-width: 450px) {
    width: calc(100% - 16px);

`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  color: #ffffff;
  tex-shadow: rgba(0,0,0,0.1) 0 0 9px 0.3px;
  font-size: 19px;
  line-height: 25px;
`;

class Main extends Component {

  state = {
    halls: this.props.rooms
  }

  render() {
    const { user } = this.props; 
    const { halls } = this.state;
    return (
      <Fragment>
        {user &&
          <Wrapper>
            <Section>
              {halls && halls.map((room, index) => (
                <CardBlock to={`/card/${room._id}`} key={index} room={room} style={{background: "lightblue"}}>
                  <Title>{room.title}</Title>
                  <Title>{room.description}</Title>
                </CardBlock>
              ))}  
            </Section>
            <Section>
              <Calendar />
            </Section>
          </Wrapper>}
      </Fragment> 
    );
  }
};

export default Main;