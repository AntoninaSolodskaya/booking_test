import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from './Calendar';
import data from '../data';

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
  justify-content: space-around;
`;

const CardBlock = styled(Link)`
  margin: 20px 8px 20px 8px;
  display: flex;
  text-align: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 9px 0.3px;
  border-radius: 5px;
  background: #FCFCFC;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  outline: none;
  text-decoration: none;
  @media(max-width: 850px) {
    width: calc(50% - 16px);
    }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 20px 20px;
  color: #ffffff;
`;


class Main extends Component {

  render() {
    const { user } = this.props; 
    return (
      <Fragment>
        {user &&
          <Wrapper>
            <Section>
              {data && data.map((room, index) => (
                <CardBlock to={`/card/${room.id}`} key={index} room={room} style={{backgroundColor: `${room.color}`}}>
                  <Title>{room.title}</Title>
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