import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardBlock = styled.button`
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

class Card extends Component {

  // state = {
  //   event: this.props.room.id
  // };


  // changeEvent = (event) => {
  //   this.setState({
  //     event: this.props.room.id
  //   })
  //   console.log(this.props.room.id);
  //   console.log(this.state.event);
  // };

  render() {
    
    const { room, changeCalendar } = this.props;
    return (
      // <CardBlock to={`/card/${room.id}`} style={{backgroundColor: `${room.color}`}}>
      <CardBlock onClick={changeCalendar} style={{backgroundColor: `${room.color}`}} className="btn">
        <Title>{room.title}</Title>
      </CardBlock>
    )
  }
}

export default Card;