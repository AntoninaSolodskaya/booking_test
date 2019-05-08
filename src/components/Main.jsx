import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardPage from './CardPage';

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
  justify-content: flex-start;
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
  font-size: 10px;
  line-height: 25px;
`;

class Main extends Component {

  state = {
    halls: this.props.rooms,
    isOpen: false,
    isLoading: false,
    tickets: []
  };

  changeEvent = (event) => {
    this.setState({
      isOpen: true
    });
  };

  render() {
    const { user } = this.props; 
    const { halls, isOpen } = this.state;
    return (
      <Fragment>
        {user &&
          <Wrapper>
            <Title style={{color: "lightblue", fontSize: "40px"}}>Please click on the room</Title>
            <Section>
              {halls && halls.map((room, index) => (
                <CardBlock to={`/card/${room._id}`} key={index} room={room} style={{background: "lightblue"}}>
                  <Title style={{fontSize: "18px"}}>{room.title}</Title>
                  <Title>{room.description}</Title> 
                </CardBlock>
              ))} 
              {isOpen &&
                <CardPage />}
            </Section>
          </Wrapper>}
      </Fragment> 
    );
  }
};

export default Main;